export const HTML = `
<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/fly.css">
        <link rel="stylesheet" href="css/fly-opensans.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/atom-one-light.css">
    </head>
    <body>
        <div class="fy-fx">
            <div class="fy-fx2 sdbar">
                <div class="fy-bx">
                    <div class="fy-mb5 fy-txac">
                        <div id="api_title">
                            Document v1.0
                        </div>
                        <div id="company" class="fy-txs">
                            FACTTORIAL
                        </div>
                    </div>
                    <ul id="sbmen" class="fy-nv -h">
                        <li><a href="">Api</a></li>
                        <li><a href="installation.html">Installation</a></li>
                        <li><a href="breakpoints.html">Breakpoints</a></li>
                        <li><a href="modifier.html">Modifier</a></li>
                        <li><a href="css-names.html">Css names</a></li>
                    </ul>
                </div>
            </div>
            <div class="fy-fxg ">
                <div class="fy-bx">
                    <h1 id="eptitle">
                            Valet Mode
                    </h1>
                    <hr class="fy-hr">
                    <div class="epdesc">
                        <p>
                            Valet Mode limits the car's top speed to 70MPH and 80kW of acceleration power. It also disables Homelink, Bluetooth and Wifi settings, and the ability to disable mobile access to the car. It also hides your favorites, home, and work locations in navigation.
                        </p>
                    </div>
                    <hr class="fy-hr">
                    <h2 id="eppath">
                        POST <span>/api/1/vehicles/{id}/command/set_valet_mode</span> 
                    </h2>
                    <p class="eppathdesc">
                        Activates or deactivates Valet Mode.
                    </p>
                    <div class="fy-mb2">
                        <h3>
                            Parementers
                        </h3>
                        <div id="epparams">
                            <table class="fy-tbl -s">
                                    <tbody><tr>
                                        <th>Paramenters</th>
                                        <th>Example</th>
                                        <th>Description</th>
                                    </tr>
                                    <tr>
                                        <td>on</td>
                                        <td>true</td>
                                        <td>true to activate, false to deactivate. Must include previous PIN if deactivating.</td>
                                    </tr>
                                    <tr>
                                        <td>password</td>
                                        <td>1234</td>
                                        <td>A PIN to deactivate Valet Mode. Can be blank if activating with a previous PIN.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="fy-mb2">
                        <h3>
                            Request example
                        </h3>
                        <div id="epreq">
                                <pre><code class="json">
                                        {
                                            "on": true,
                                            "password": "768655"
                                        }
                                </code></pre>
                        </div>
                    </div>
                    <div class="fy-mb2">
                            <h3>
                                Response
                            </h3>
                        <div id="epres">
                            <pre><code class="json">
                                    {
                                        "success": true,
                                        "result": {
                                            "id":"123",
                                            "name":"roll"
                                        }
                                    }
                            </code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="js/highlight.pack.js"></script>
        <script>hljs.initHighlightingOnLoad();</script>
    </body>
</html>
`;
