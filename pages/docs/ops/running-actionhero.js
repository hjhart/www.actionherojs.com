import React from 'react'
import DocsPageWithNav from './../../../pageClasses/docsPageWithSideNav.js'
import { Row, Col } from 'react-bootstrap'
import DocsPage from './../../../components/layouts/docsPage.js'

import Code from './../../../components/code.js'

const Binary =
`ActionHero - A multi-transport node.js API Server with integrated cluster capabilities and delayed tasks

Binary options:

* actions list
* console
* generate
* generate action
* generate cli
* generate initializer
* generate server
* generate task
* help
* link
* start
* start cluster
* task enqueue
* unlink
* version

Descriptions:

* actions list
  description: I will list the actions defined on this server

* console
  description: start an interactive REPL session with the api object in-scope

* generate
  description: will prepare an empty directory with a template ActionHero project

* generate action
  description: generate a new action
  example: actionhero generate action --name=[name] --description=[description]
  inputs:
    [name]
    [description]
      default: an actionhero action

* generate cli
  description: generate a new cli command
  example: actionhero generate cli --name=[name]
  inputs:
    [name]
    [description] (optional)
      default: an actionhero cli command
    [example] (optional)
      default: actionhero command --option=yes

* generate initializer
  description: generate a new initializer
  example: actionhero generate initializer --name=[name] --loadPriority=[p] --startPriority=[p] --stopPriority=[p]
  inputs:
    [name]
    [loadPriority]
      default: 1000
    [startPriority]
      default: 1000
    [stopPriority]
      default: 1000

* generate server
  description: generate a new server
  example: actionhero generate server --name=[name]
  inputs:
    [name]

* generate task
  description: generate a new task
  example: actionhero generate task --name=[name] --description=[description] --scope=[scope] --frequency=[frequency]
  inputs:
    [name]
    [queue]
    [description]
      default: an actionhero task
    [frequency]

* help
  description: get actonhero CLI help; will display this document

* link
  description: link a plugin to this actionhero project
  example: actionhero link --name=[pluginName] --overwriteConfig=[overwriteConfig]
  inputs:
    [name]
    [overwriteConfig] (optional)

* start
  description: start this ActionHero server
  example: actionhero start --config=[/path/to/config] --title=[processTitle] --daemon
  inputs:
    [config] (optional)
      note: path to config.js, defaults to "process.cwd() + '/' + config.js". You can also use ENV[ACTIONHERO_CONFIG]
    [title] (optional)
      note: process title to use for ActionHeros ID, ps, log, and pidFile defaults. Must be unique for each member of the cluster. You can also use ENV[ACTIONHERO_TITLE]. Process renaming does not work on OSX/Windows
    [daemon] (optional)
      note: to fork and run as a new background process defaults to false

* start cluster
  description: start an actionhero cluster
  example: actionhero start cluster --workers=[numWorkers] --workerTitlePrefix=[title] --daemon
  inputs:
    [workers]
      note: number of workers (defaults to # CPUs)
      default: 8
    [title] (optional)
      note: worker title prefix (default 'actionhero-worker-') set \`--workerTitlePrefix=hostname\`, your app.id would be like \`your_host_name-#\`
    [workerTitlePrefix]
      default: actionhero-worker-
    [daemon] (optional)
      note: to fork and run as a new background process defaults to false
    [silent] (optional)

* task enqueue
  description: enqueue a defined task into your actionhero cluster
  example: actionhero task enqueue --name=[taskName] --args=[JSON-formatted args]
  inputs:
    [name]
    [args] (optional)
    [params] (optional)

* unlink
  description: unlink a plugin from this actionhero project
  example: actionhero unlink --name=[pluginName]
  inputs:
    [name]

* version
  description: return the ActionHero version within this project
`

const ConfigPriority =
// from ./config/namespace.js
`exports['default'] = {
  namespace: function (api) {
    return {
      enabled: true,
      safe: false
    }
  }
}

exports.production = {
  namespace: function (api) {
    return {
      safe: true
    }
  }
}`

const ProgramaticUse =
`var actionheroPrototype = require("actionhero");
var actionhero = new actionheroPrototype();

var timer = 5000;
actionhero.start(params, function(error, api){

  api.log(" >> Boot Successful!");
  setTimeout(function(){

    api.log(" >> restarting server...");
    actionhero.restart(function(error, api){

      api.log(" >> Restarted!");
      setTimeout(function(){

        api.log(" >> stopping server...");
        actionhero.stop(function(error, api){

          api.log(" >> Stopped!");
          process.exit();

        });
      }, timer);
    })
  }, timer);
});`

const Signals =
`> ./node_modules/.bin/actionhero start cluster --workers=2
info: actionhero >> start cluster
notice:  - STARTING CLUSTER -
notice: pid: 41382
info: starting worker #1
info: worker 41383 (#1) has spawned
info: Worker #1 [41383]: starting
info: Worker #1 [41383]: started
info: starting worker #2
info: worker 41384 (#2) has spawned
info: Worker #2 [41384]: starting
info: Worker #2 [41384]: started

# A new terminal
kill -s TTIN \`cat pids/cluster_pidfile\`

info: worker 41632 (#3) has spawned
info: Worker #3 [41632]: starting
info: Worker #3 [41632]: started

# A new terminal
kill -s KILL \`cat pids/cluster_pidfile\`

warning: Cluster manager quitting
info: Stopping each worker...
info: Worker #1 [41901]: stopping
info: Worker #2 [41904]: stopping
info: Worker #3 [41906]: stopping
info: Worker #3 [41906]: stopped
info: Worker #2 [41904]: stopped
info: Worker #1 [41901]: stopped
alert: worker 41901 (#1) has exited
alert: worker 41904 (#2) has exited
alert: worker 41906 (#3) has exited
info: all workers gone
notice: cluster complete, Bye!`

export default class extends DocsPageWithNav {
  constructor (props) {
    super(props)

    this.state = {
      titleSection: {
        title: 'Operations: Running ActionHero',
        icon: '/static/images/ops-tools.svg'
      },
      sections: {
        'binary': 'The ActionHero Binary',
        'linking': 'Linking the ActionHero binary',
        'env-and-config': 'Environments and Config',
        'programatic-use': 'Programatic Use of ActionHero',
        'signals': 'Signals',
        'shutting-down': 'Shutting Down',
        'windows-notes': 'Windows-Specific Notes'
      },
      links: [
        {link: '/docs/ops/development-mode', title: '» Core: Development Mode'}
      ]
    }
  }

  render () {
    return (
      <DocsPage sideNav={this.state.sections} titleSection={this.state.titleSection} links={this.state.links} currentSection={this.state.currentSection}>
        <Row>
          <Col md={12}>
            { this.section('binary',
              <div>
                <Code language='bash'>{Binary}</Code>
                <p>The suggested method to run your ActionHero server is to use the included <code>./node_modules/.bin/actionhero</code> binary.  Note that there is no <code>main.js</code> or specific start script your project needs.  ActionHero handles this for you.  Your ActionHero project simply needs to follow the proper directory conventions and it will be bootable.</p>
              </div>
            )}

            { this.section('linking',
              <div>
                <ul>
                  <li>If you installed ActionHero globally (<code>npm install actionhero -g</code>) you should have the <code>actionhero</code> binary available to you within your shell at all times.</li>
                  <li>Otherwise, you can reference the binary from either <code>./node_modules/.bin/actionhero</code> or <code>./node_modules/actionhero/bin/actionhero</code>.</li>
                  <li>If you installed ActionHero locally, you can add a reference to your path (OSX and Linux): <code>export PATH=$PATH:node_modules/.bin</code> to be able to use simpler commands, IE <code>actionhero start</code>. On windows this can be done by running <code>set PATH=%PATH%;%cd%\node_modules\.bin</code> at command prompt (not powershell).</li>
                </ul>
              </div>
            )}

            { this.section('env-and-config',
              <div>
                <p>By default, ActionHero will use the settings found in the <code>exports.default</code> blocks in <code>/config/</code>.  However, you can set environment-specfic overrides or changes.  ActionHero inspects <code>process.env.NODE_ENV</code> to load up runtime configuration overrides from <code>{`exports.#{env}`}</code> blocks in your configuration files.  This is the recommended way to have separate settings for staging and production.</p>
                <p>The load order of configs is:</p>

                <ul>
                  <li>default values in <code>/config</code></li>
                  <li>environment-specific values in <code>/config</code></li>
                  <li>options passed in to boot with <code>{`actionhero.start({configChanges: configChanges}, callback)`}</code></li>
                </ul>

                <Code>{ConfigPriority}</Code>
                <p>In the example above, we are defining <code>api.config.namespace.enabled</code> and <code>api.config.namespace.safe</code>.  In all environments (NODE_ENV) <code>api.config.namespace.enabled = true</code> Only in production would <code>api.config.namespace.safe = true</code>, it is <code>false</code> everywhere else.</p>
              </div>
            )}

            { this.section('programatic-use',
              <div>
                <Code>{ProgramaticUse}</Code>
                <p>While <strong>NOT</strong> encouraged, you can always instantiate an ActionHero server yourself.  Perhaps you wish to combine ActionHero with an existing project.  Here is how!  Take note that using these methods will not work for actionCluster, and only a single instance will be started within your project.</p>
                <p>Feel free to look at the source of <code>./node_modules/actionhero/bin/include/start</code> to see how the main ActionHero server is implemented for more information.</p>
                <p>You can programmatically control an ActionHero server with <code>actionhero.start(params, callback)</code>, <code>actionhero.stop(callback)</code> and <code>actionhero.restart(callback)</code></p>
                <p>From within ActionHero itself (actions, initilizers, etc), you can use <code>api.commands.start</code>, <code>api.commands.stop</code>, and <code>api.commands.restart</code> to control the server.</p>
              </div>
            )}

            { this.section('signals',
              <div>
                <Code language='bash'>{Signals}</Code>
                <p>ActionHero is intended to be run on <code>*nix</code> operating systems.  The <code>start</code> and <code>start cluster</code> commands provide support for signaling. (There is limited support for some of these commands in windows).</p>

                <p><strong>actionhero start</strong></p>

                <ul>
                  <li><code>kill</code> / <code>term</code> / <code>int</code> : Process will attempt to "gracefully" shut down.  That is, the worker will close all server connections (possibly sending a shutdown message to clients, depending on server type), stop all task workers, and eventually shut down.  This action may take some time to fully complete.</li>
                  <li><code>USR2</code>: Process will restart itself.  The process will preform the "graceful shutdown" above, and they restart.</li>
                </ul>

                <p><strong>actionhero start cluster</strong></p>

                <p>All signals should be sent to the cluster master process.  You can still signal the termination of a worker, but the cluster manager will start a new one in its place.</p>

                <ul>
                  <li><code>kill</code> / <code>term</code> / <code>int</code>:  Will signal the master to "gracefully terminate" all workers.  Master will terminate once all workers have completed</li>
                  <li><code>HUP</code> : Restart all workers.</li>
                  <li><code>USR2</code> : "Hot reload".  Worker will kill off existing workers one-by-one, and start a new worker in their place.  This is used for 0-downtime restarts.  Keep in mind that for a short while, your server will be running both old and new code while the workers are rolling.</li>
                  <li><code>TTOU</code>: remove one worker</li>
                  <li><code>TTIN</code>: add one worker</li>
                </ul>
              </div>
            )}

            { this.section('shutting-down',
              <div>
                <p>When using <code>actionhero start</code> or <code>actionhero start cluster</code>, when you signal ActionHero to stop via the signals above (or from within your running application via <code>api.commands.stop()</code>), actionhero will attempt to gracefully shutdown.  This will include running any initializer's <code>stop()</code> method.  This will close any open servers, and attempt to allow any running tasks to complete.</p>
                <p>Because things sometimes go wrong, <code>actionhero start</code> and <code>actionhero start cluster</code> also have a "emergency stop" timeout.  This defaults to 30 seconds, and is configurable via the <code>ACTIONHERO_SHUTDOWN_TIMEOUT</code> environment variable.  Be sure that your tasks and actions can complete within that window, or else raise that shutdown limit.</p>
              </div>
            )}

            { this.section('windows-notes',
              <div>
                <li>Sometimes ActionHero may require a git-based module (rather than a NPM module).  You will need to have git installed.  Depending on how you installed git, it may not be available to the node shell.  Be sure to have also installed references to git.  You can also run node/npm install from the git shell.</li>
                <li>Sometimes, npm will not install the actionhero binary @ <code>/node_modules/.bin/actionhero</code>, but rather it will attempt to create a windows executable and wrapper.  You can launch ActionHero directly with <code>./node_modules/actionhero/bin/actionhero</code></li>
              </div>
            )}
          </Col>
        </Row>
      </DocsPage>
    )
  }
}
