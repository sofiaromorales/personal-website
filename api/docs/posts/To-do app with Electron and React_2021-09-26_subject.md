10 min read
# Creating a simple to-do app with Electron and React

**Hi everyone!** I've always liked technical writing, so I wrote this as my first tech post, hope you like it.

I'm a big fan of Cassidy Williams, and she has this cool tool that she built herself called todometer ([https://github.com/cassidoo/todometer](https://github.com/cassidoo/todometer)), so some weeks ago I was thinking about what app to make to learn something new so I decided to try to make something similar to Cassisy's app, but this time I would document the whole process, and that's how I came up with the idea for GetSh*tDone

GetSh*tDone is a very minimal app where you can track your todos and will see the progress on a progress bar. Check it out here [https://github.com/sofiarm21/get-sht-done](https://github.com/sofiarm21/get-sht-done)

So let's start

I hope you have some familiarity with React and JS

## ElectronJS

Electron is a framework that let's you build desktop apps using JS. You can combine this with different libraries like React.

So how Electron's works.

Electron is chromium based, meaning that the architectural model is very similar to how a web application works.

Each Electron app has a `main` process, which is the one that runs on top of the computer O.S. This process runs in NodeJS. The purpose of this app is control the app window lifecycle, operate with the O.S and have control over the child process called `renderer` process. It doesn't have any DOM or UI, but it does have access to the API's.

The `renderer` process are the ones that renders the actual content of the window app, and it behaves as a normal web file. Each application window is a render process. There can be as many renderer process as it wants but only one main process.

To communicate this two processes there's something called `ipcMain`, which is a module that works as event emitter in the main process and handle those message that comes from render process. It's worth to mention that this is an async communication so it will not block other renderer process.

![Electron architecture](https://user-images.githubusercontent.com/49292858/134823245-843b59dd-16e2-4ae6-9eb7-1ccc2060d754.png)

## Building the TODO app

### Setup

As I mentioned before, we are gonna use create react app to have a quick setup of our React app without handling any webpack module. We will be using npm as our package manager but you can use yarn if you like.

So go ahead and create your project

```javascript
$ npx create-react-app electron-todo-app
$ cd electron-todo-app
$ npm init
```

Now install the needed packages for the app

```javascript
$ npm install --save-dev electron electron-is-dev wait-on concurrently electron-builder
$ npm install electron-store sass
```

* 👉  electron: Installs the electron framework
* 👉  electron-is-dev: Will be useful to identify when we are in building the app locally and when we are using a production version
* 👉  concurrently: package that let's run two different npm commands by just running one
* 👉  electron-builder: will make easier the building process at the end of the tutorial
* 👉  electron-store: Since it's desktop we don't have access to our local web storage, so this package provides a similar solution for desktop
* 👉  sass: a css pre-processor, you can use any you like, or not use it at all

On the package-json file setup the corresponding metadata of the app

```javascript
"version": "1.0.0",
  "private": true,
  "license": "MIT",
  "author": {
      "name": "Sofía Rodríguez",
      "email": "sofiaromorales@gmail.com",
      "url": "https://www.sofiaro.com"
 },
```

and set the build object ant the file where our main process will be declare, this is the entry point of the app, in our case will be the `electron.js` file

```javascript
"build": {
      "appId": "com.sofiaro.get-sht-done",
      "productName": "get-sht-done",
      "mac": {
          "category": "public.app-category.utilities"
      },
       "directories": {
         "buildResources": "assets"
     },
     "files": [
      "node_modules/**/*",
      "package.json",
      "./build/**/*",
      "./public/electron.js"
    ],
     "extends": null
 },
"main": "public/electron.js",
```

To run the electron app create an npm script to run both the react app and the electron app

```javascript
"start": "react-scripts start",
"dev": "concurrently -k \"BROWSER=none npm start\" \"npm:electron\"",
"electron": "wait-on tcp:3000 && electron .",
```

Concurrently allows us to run two scripts at the same time and with wait-on we will wait for the port 3000 to launch the app

### Electron main process

Go ahead and create an `electron.js` file inside the public folder, here's where our main process will live. Here will be controlling the app lifecycle.

Import these libraries at the top of the file

```javascript
const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const isDev = require('electron-is-dev')
const Store = require('electron-store');
```

Create the following function

```javascript
function createWindow () {
	const win = new BrowserWindow({
    width: 800,
    height: 600,
		webPreferences: {
			nodeIntegration: true,
      enableRemoteModule: true,
      preload: __dirname + '/preload.js'
	  }
  })
	window.loadURL(
	  isDev
    ? 'http://localhost:3000'
    :  `file://${path.join(__dirname, "../build/index.html")}`
  )
  if (isDev) {
      window.webContents.openDevTools({mode: 'detach'})
  }
}
```

Here we set the window properties and we load the window content, which will be our react app that runs in `[localhost:3000](http://localhost:3000)` if we are on development mode or the build file if we are using the build app.

To create the window we need to wait for the electron app to be ready. To know this the app object provides us with a couple of events to react to them, like `ready` , `window-all-closed`, `activate` You can check the full list on here [https://www.electronjs.org/docs/api/app#events](https://www.electronjs.org/docs/api/app#events)

```jsx
app.on('ready', () => createWindow())

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
```

On ready and activated we want to create our app window, and when closed we want to quit the app.

### The react app

The electron part of the app is covered already, what's left is building the todo app perse, I'm will suppose that you have experience with javascript and react, but anyway we are not going to do anything fancy. Feel free to take it from here and build your own todo app on React.

This app will have three lists, the pending, completed, and on hold tasks. Each task will have a series of button to be able to move the task from list to list, we are going to have an input bar to add tasks to the pending list and a progress bar to easily see our progress.

The state of our tasks will be one the types `pending` `completed` or `on-hold`. And the types of the hole lists will be `pending-tasks` `complete-tasks` or `on-hold-tasks`

Create the following components

**The tasks list**

This will be a generic component that will render a tasks list. Will have the tasks, title, type, and the functions clear, setAsCompleted, setOnHold and setAsPending as parameters.

The threee images imported from the assets folder can be anything you like

```javascript
import React, { useState } from 'react'
import CheckmarkImage from '../assets/checkmark.png'
import ResumeImage from '../assets/resume.png'
import PauseImage from '../assets/pause.png'

const TasksList = ({
    clear,
    tasks,
    title,
    type,
    setAsCompleted,
    setOnHold,
    setAsPending
}) => {

    const [collapsed, setCollpased] = useState(false)

    const clearTask = () => {
        if (tasks.length) {
            const listType = tasks[0].type == 'pending'
            ? 'pending-tasks'
            :  tasks[0].type == 'completed'
                ? 'complete-tasks'
                : 'on-hold-tasks'
            clear({listType: listType})
        }
    }

    const renderTasks = ({tasks}) => {
        return tasks.map(t => {
            if (t && t.type === type) {
                return (
                    <div className='task-container'>
                        {`${t.title}`}
                        {type ==='pending' &&
                            <>
                                <div className='icon on-pause'>
                                    <img src={CheckmarkImage} alt='completed' onClick={() => setAsCompleted(t)}/>
                                    <img src={PauseImage} alt='hold' onClick={() => setOnHold(t)}/>
                                </div>
                            </>
                        }
                        {type ==='on_hold' &&
                            <div className='icon resume'>
                                <img src={ResumeImage} alt='resume' onClick={() => setAsPending(t)}/>
                            </div>
                        }
                    </div>
                )
            }
            return null
        })
    }

    return (
        <div className='TasksList'>
            <div className='title-container'>
                <button onClick={() => setCollpased(!collapsed)}>
                    {`${collapsed ? '+' : '-'}`}
                </button>
                <div className='list-title'>
                    {title}
                </div>
                <div className='clear-button' onClick={() => clearTask()}>
                    Clear
                </div>
            </div>
            <div className={`tasks-list-content ${collapsed ? 'collapsed' : ''}`}>
                {renderTasks({tasks})}
            </div>
        </div>
    )
}

export default TasksList
```

**The Input Bar**

This input is where the user will be able to add the tasks, by default the tasks will be added to the Pending tasks list. The logic of the onAdd function itself will be passed down from the parent component, and will be called when the user clicks the Add button.

```javascript
import React, { useState } from 'react'

const InputBar = ({
    onAdd
}) => {

    const [newTask, setNewTask] = useState(null)

    const addTask = (task) => {
        if (task && task !== undefined) {
            onAdd(task)
        }
        setNewTask(null)
        document.getElementById('taskInput').value = ''
    }

    return(
        <div className='InputBar'>
            <div className='input-container'>
                <div className='input-wrapper'>
                    <input
                        type='text'
                        name='todo'
                        id='taskInput'
                        placeholder='Enter todo'
                        onChange={(input) => setNewTask(input.target.value)}
                    />
                </div>
                <div
					className='add-button-container'
					onClick={() => addTask(newTask)}
				>
                    <div className='button-text'>
                        Add
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputBar
```

**The Progress Bar**

The idea here is have a bar to easily see which is your progress, Andy the computation of the realized tasks (green), the pending ones (yellow) and the ones on hold (red).

```javascript
import React from 'react'

const ProgressBar = ({
    pendingPercentage,
    successPercentage,
    holdPercentage
}) => {

    const successBar = {
        transition: 'width 1s ease-in-out',
        width: `${successPercentage}%`
    }

    const holdBar = {
        transition: 'width 1s ease-in-out',
        width: `${holdPercentage}%`
    }

    const pendingBar = {
        transition: 'width 1s ease-in-out',
        width: `${pendingPercentage}%`
    }

    return (
        <div className='ProgressBar'>
            <div className='pending-bar' style={pendingBar}/>
            <div className='success-bar' style={successBar}/>
            <div className='hold-bar' style={holdBar}/>
        </div>
    )
}

export default ProgressBar
```

That's it, those are all the needed components now let's place all together in the `App.js` file

**Placing all together**

On the `App.js` file we are going to add the three components and create the needed logic to make all work together.

```javascript
import React, { useState, useEffect } from 'react'
import 'fs'

import './App.css'

import TasksList from './components/TasksList'
import InputBar from './components/InputBar'
import ProgressBar from './components/ProgressBar'

const { ipcRenderer } = window.require('electron')

function App() {

    const [pendingTasks, setPendingTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    const [onHoldTasks, setOnHoldTasks] = useState([])
    const [successPercentage, setSuccessPercentage] = useState(0)
    const [holdPercentage, setHoldPercentage] = useState(0)
    const [pendingPercentage, setPendingPercentage] = useState(0)

    const clear = ({listType}) => {
        if (listType == 'pending-tasks') {
            setPendingTasks([])
        }
        else if (listType == 'complete-tasks') {
            setCompletedTasks([])
        }
        else if (listType == 'on-hold-tasks') {
            setOnHoldTasks([])
        }
        ipcRenderer.send('delete_tasks', {
            storeName: listType,
            value: []
        })
    }

    const addPendingTask = (task) => {
        const tasks = pendingTasks
        tasks.push({title: task, type: 'pending'})
        setPendingTasks([...tasks])
    }

    const resetTasks = () => {
        setPendingTasks([])
        setCompletedTasks([])
        setOnHoldTasks([])
        setSuccessPercentage(0)
    }

    const setAsCompleted = (task) => {
        const completedTaskIndex = pendingTasks.findIndex(t => t === task)
        const pendingTasksCopy = pendingTasks
        pendingTasksCopy.splice(completedTaskIndex, 1)
        setPendingTasks([...pendingTasksCopy])
        task.type = 'completed'
        setCompletedTasks([...completedTasks, task])
    }

    const setOnHold = (task) => {
        const onHoldTaskIndex = pendingTasks.findIndex(t => t === task)
        const pendingTasksCopy = pendingTasks
        pendingTasksCopy.splice(onHoldTaskIndex, 1)
        setPendingTasks([...pendingTasksCopy])
        task.type = 'on_hold'
        setOnHoldTasks([...onHoldTasks, task])
    }

    const setAsPending = (task) => {
        const onPendingTaskIndex = pendingTasks.findIndex(t => t === task)
        const onHoldTasksCopy = onHoldTasks
        onHoldTasksCopy.splice(onPendingTaskIndex, 1)
        setOnHoldTasks([...onHoldTasksCopy])
        task.type = 'pending'
        setPendingTasks([...pendingTasks, task])
    }

    useEffect(() => {
        const tasks = [...pendingTasks, ...completedTasks, ...onHoldTasks]
        setSuccessPercentage(tasks.length ? (completedTasks.length * 100) / tasks.length : 0)
        setHoldPercentage(tasks.length ? (onHoldTasks.length * 100) / tasks.length : 0)
        setPendingPercentage(pendingTasks.length ? (pendingTasks.length * 100) / tasks.length : 0)
    },[completedTasks, pendingTasks, onHoldTasks])

    return (
        <div className='App'>
            <div className='control-bar'>
                <InputBar onAdd={(task) => addPendingTask(task)}/>
                <ProgressBar
                    successPercentage={successPercentage}
                    holdPercentage={holdPercentage}
                    pendingPercentage={pendingPercentage}
                />
            </div>
            <TasksList
                clear={(listType) => clear(listType)}
                tasks={pendingTasks}
                title='Pending'
                type='pending'
                setAsCompleted={(task) => setAsCompleted(task)}
                setOnHold={(task) => setOnHold(task)}
            />
            <TasksList
                clear={(listType) => clear(listType)}
                tasks={completedTasks}
                title='Completed'
                type='completed'
                setAsCompleted={(task) => setAsCompleted(task)}
                setOnHold={(task) => setOnHold(task)}
            />
            <TasksList
                clear={(listType) => clear(listType)}
                tasks={onHoldTasks}
                title='On Hold'
                type='on_hold'
                setAsCompleted={(task) => setAsCompleted(task)}
                setOnHold={(task) => setOnHold(task)}
                setAsPending={(task) => setAsPending(task)}
            />
            <div className='reset-button' onClick={() => resetTasks()}>
                Reset
            </div>
        </div>
    );
}

export default App;
```

Go ahead an run the `npm run develop` command. You should be having a working todo app. Remember that all the styles implementation you can add it from the project repo.

### Adding storage

By now you should be having a working todo app in your desktop, but what happens when you close the app and relaunch it again, all the tasks are lost, so let's fix that.

On the web you would normally use your local storage or if you get a little fancier connect to an external DB, but this is not the case for desktop apps. The `electron-store` package that we installed earlier is a solution for this, we use this as a similar approach to the local storage on the web.

In the `electron.js` file add create a store object using the Store import.

```jsx
const store = new Store();
```



Now we have to listen to the events `add_task` and `delete_task` using `ipcMain` to store the value in the store. The electro official documentation provides detailed info about how do this [https://www.electronjs.org/docs/api/ipc-main#sending-messages](https://www.electronjs.org/docs/api/ipc-main#sending-messages) but with ipcMain for hearing message we have to use a channel and the listener function.

```javascript
ipcMain.on(channel, (event, arg) => {
	//callback...
})
```

The event is the name of the channel and arg is the props passed down within the message. Let's set it up

```javascript
ipcMain.on('add_task', (event, arg) => {
    const {
        storeName,
        value
    } = arg
    store.set(storeName, value);
});

ipcMain.on('delete_tasks', (event, arg) => {
    const {
        storeName,
        value
    } = arg
    store.set(storeName, value);
});
```

This channels will be useful for any of the three possible lists. And as you can notice using the store is pretty simple, just set a pair of key:value properties.

On the `App.js` we have to listen to any change in any of the lists and notify the main process so this can store the new tasks on the permanent storage, it also has to notify any tap on the Clear or Reset buttons to clear the list. Add the following on the `App.js` file

```javascript
useEffect(() => {
        ipcRenderer.send('add_task', {
            storeName:'pending-tasks',
            value: [...pendingTasks]
        })
    }, [pendingTasks])

    useEffect(() => {
        ipcRenderer.send('add_task', {
            storeName:'complete-tasks',
            value: [...completedTasks]
        })
    }, [completedTasks])

    useEffect(() => {
        ipcRenderer.send('add_task', {
            storeName:'on-hold-tasks',
            value: [...onHoldTasks]
        })
    }, [onHoldTasks])
```

We also need to read these values when the app is first open so we can have the values in scree again, so on `useEffect` when the app first load we need to hear the main process to get the values that is going to send to us, and store them in the proper arrays

```javascript
useEffect(() => {
        ipcRenderer.on('pending-tasks', (event, arg) => {
            setPendingTasks([...arg.filter(pt => pt != null)])
        })
        ipcRenderer.on('complete-tasks', (event, arg) => {
            if (arg) {
                setCompletedTasks([...arg.filter(ct => ct != null)])
            }
        })
        ipcRenderer.on('on-hold-tasks', (event, arg) => {
            if (arg) {
                setOnHoldTasks([...arg.filter(ct => ct != null)])
            }
        })
    }, [])
```

We are just one step away faking our app fully functional.

On the `electron.js` file when the app finish loading we have to send the tasks stored on the store to the render process, we can achieve this by using `window.webContents.send(channel, args)`

Inside the `createWindow` function add

```javascript
window.webContents.on('did-finish-load', () => {
	window.webContents.send('pending-tasks', store.get('pending-tasks'))
  window.webContents.send('complete-tasks', store.get('complete-tasks'))
  window.webContents.send('on-hold-tasks', store.get('on-hold-tasks'))
})
```

and that's it, test your app, and let the productivity began.

## Distribution build

Right now the app is fully functional but only by running the `npm run dev` command. This will bring problems if you are developing another app that uses the port 3000 because you will not be able to tun both at the same time, so a distribution build it's necessary

Add the following scripts to the `package.json` file

```javascript

"scripts": {
	...
	"postinstall": "electron-builder install-app-deps",
	"pre-electron-pack": "react-scripts build",
	"electron-pack": "electron-builder build --dir --mac"
}
```

Run this three commands on that exact same orden and you should have the distribution file inside the dis folder.

This will only create the Mac dist, if you are looking to any other O.S distribution look into electron-builder official documentation.

## Conclussion

There's a lot of online documentation about creating apps with electron but not that many that includes react and the distribution build process, so I hope this article was valuable for you.

Thanks a lot, if you like it feel free to reach me on twitter and message me with your comment.

Bye 😄👋
