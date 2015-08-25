<a href="https://zenhub.io"><img src="https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png"></a>

uber-dash
===
Simple application get a Uber ride using Amazon's dash-button.


How does it work?
===
I used the `pcap` module to listen what is happening on the `en0` network interface.
Every time the dash button wakes up, it sends ARP probes to the network to identify himself.
By catching those packets, we are able to trigger virtually anything.
I decided to use `Uber API` in order to get my daily Uber ride.

Installation and setup
===
 - Create an app on [Uber](https://developer.uber.com/dashboard) in order to consume their API.
 - Modify `./src/config.js` with your dash button MAC address, your Uber application credentials and the start/end location of your drive 
 - `$ npm install`
 - `$ sudo ./uber-dash.js` #root needed to monitor the network AFAIK
 - Visit `http://localhost:3000/login` to allow the app to request Uber rides for you then close the tab
 - Press the button
 - Get in the car!



License
===
The MIT License (MIT)

Copyright (c) 2015 Geoffrey Tisserand

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
