"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[87198],{484243:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o=JSON.parse('{"key":"v-662ecf5f","path":"/devices/CTP-R01.html","title":"Xiaomi CTP-R01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Xiaomi CTP-R01 control via MQTT","description":"Integrate your Xiaomi CTP-R01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-02-01T14:45:22.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Battery","slug":"battery","link":"#battery","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Mode Switch","slug":"mode-switch","link":"#mode-switch","children":[]},{"level":3,"title":"Supported Actions","slug":"supported-actions","link":"#supported-actions","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Power outage count (numeric)","slug":"power-outage-count-numeric","link":"#power-outage-count-numeric","children":[]},{"level":3,"title":"Operation mode (enum)","slug":"operation-mode-enum","link":"#operation-mode-enum","children":[]},{"level":3,"title":"Side (numeric)","slug":"side-numeric","link":"#side-numeric","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Action from side (numeric)","slug":"action-from-side-numeric","link":"#action-from-side-numeric","children":[]},{"level":3,"title":"Action angle (numeric)","slug":"action-angle-numeric","link":"#action-angle-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1705517368000},"filePathRelative":"devices/CTP-R01.md"}')},565732:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var o=i(166252);const d=(0,o._)("h1",{id:"xiaomi-ctp-r01",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#xiaomi-ctp-r01","aria-hidden":"true"},"#"),(0,o.Uk)(" Xiaomi CTP-R01")],-1),a=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th"),(0,o._)("th")])],-1),n=(0,o._)("tr",null,[(0,o._)("td",null,"Model"),(0,o._)("td",null,"CTP-R01")],-1),r=(0,o._)("td",null,"Vendor",-1),l=(0,o._)("tr",null,[(0,o._)("td",null,"Description"),(0,o._)("td",null,"Aqara magic cube T1 Pro")],-1),c=(0,o._)("tr",null,[(0,o._)("td",null,"Exposes"),(0,o._)("td",null,"battery, voltage, power_outage_count, operation_mode, side, action, action_from_side, action_angle, linkquality")],-1),s=(0,o._)("tr",null,[(0,o._)("td",null,"Picture"),(0,o._)("td",null,[(0,o._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/CTP-R01.jpg",alt:"Xiaomi CTP-R01"})])],-1),h=(0,o._)("tr",null,[(0,o._)("td",null,"White-label"),(0,o._)("td",null,"Xiaomi MFCZQ12LM")],-1),u=(0,o.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery" aria-hidden="true">#</a> Battery</h3><p>Uses a CR2450 battery</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Remove the back plate by using the included tool or a wedge to click it off. Press and hold the LINK button inside the device for +- 5 seconds (until the blue light blinks three times). After this the device will automatically join, but the interview process may not finish. If that happens, keep doing short presses to the LINK button to keep the light flashing, until the interview process finishes successfully.</p><h3 id="mode-switch" tabindex="-1"><a class="header-anchor" href="#mode-switch" aria-hidden="true">#</a> Mode Switch</h3><p>There are two ways to toggle between scene mode and action mode:</p><ol><li><p>Hard switch:</p><p>Open lid, and click LINK 5 times in a row.</p></li><li><p>Soft switch (using Zigbee2MQTT frontend):</p><p>Toggle <code>operation_mode</code> in the Exposes tab of the device in Zigbee2MQTT frontend. Change won&#39;t happen right away, the device only responds to mode switch once an hour. But you can give the device a throw (a forceful shake action without backward motion), which, when done right, will force the device to respond. Otherwise you can open lid and click LINK button to have it respond immediately.</p></li></ol><h3 id="supported-actions" tabindex="-1"><a class="header-anchor" href="#supported-actions" aria-hidden="true">#</a> Supported Actions</h3><ul><li><p>Scene mode:</p><table><thead><tr><th>Action</th><th>additional attributes in payload</th></tr></thead><tbody><tr><td>rotate_left</td><td>action_angle</td></tr><tr><td>rotate_right</td><td>action_angle</td></tr><tr><td>shake</td><td>-</td></tr><tr><td>throw</td><td>-</td></tr><tr><td>hold</td><td>-</td></tr><tr><td>side_up</td><td>side</td></tr><tr><td>flip_to_side</td><td>side</td></tr><tr><td>1_min_inactivity</td><td>-</td></tr></tbody></table></li><li><p>Action mode:</p><table><thead><tr><th>Action</th><th>additional attributes in payload</th></tr></thead><tbody><tr><td>rotate_left</td><td>action_angle</td></tr><tr><td>rotate_right</td><td>action_angle</td></tr><tr><td>shake</td><td>-</td></tr><tr><td>throw</td><td>-</td></tr><tr><td>slide</td><td>side</td></tr><tr><td>tap</td><td>side</td></tr><tr><td>flip90</td><td>side, action_from_side</td></tr><tr><td>flip180</td><td>side, action_from_side</td></tr><tr><td>1_min_inactivity</td><td>-</td></tr></tbody></table></li></ul>',10),p=(0,o._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,o.Uk)(" OTA updates")],-1),m=(0,o.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power outage count (numeric)</h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#operation-mode-enum" aria-hidden="true">#</a> Operation mode (enum)</h3><p>[Soft Switch]: There is a configuration window, opens once an hour on itself, only during which the cube will respond to mode switch. Mode switch will be scheduled to take effect when the window becomes available. You can also give it a throw action (no backward motion) to force a respond! Otherwise, you may open lid and click LINK once to make the cube respond immediately. [Hard Switch]: Open lid and click LINK button 5 times.. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>action_mode</code>, <code>scene_mode</code>.</p><h3 id="side-numeric" tabindex="-1"><a class="header-anchor" href="#side-numeric" aria-hidden="true">#</a> Side (numeric)</h3><p>Side of the cube. Value can be found in the published state on the <code>side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action. Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>shake</code>, <code>throw</code>, <code>tap</code>, <code>slide</code>, <code>flip180</code>, <code>flip90</code>, <code>hold</code>, <code>side_up</code>, <code>rotate_left</code>, <code>rotate_right</code>, <code>1_min_inactivity</code>, <code>flip_to_side</code>.</p><h3 id="action-from-side-numeric" tabindex="-1"><a class="header-anchor" href="#action-from-side-numeric" aria-hidden="true">#</a> Action from side (numeric)</h3><p>Side of the cube. Value can be found in the published state on the <code>action_from_side</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>6</code>.</p><h3 id="action-angle-numeric" tabindex="-1"><a class="header-anchor" href="#action-angle-numeric" aria-hidden="true">#</a> Action angle (numeric)</h3><p>Value can be found in the published state on the <code>action_angle</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-360</code> and the maximum value is <code>360</code>. The unit of this value is <code>°</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),g={},b=(0,i(983744).Z)(g,[["render",function(e,t){const i=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.kq)(" !!!! "),(0,o.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,o.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,o.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,o.kq)(" !!!! "),d,(0,o._)("table",null,[a,(0,o._)("tbody",null,[n,(0,o._)("tr",null,[r,(0,o._)("td",null,[(0,o.Wm)(i,{to:"/supported-devices/#v=Xiaomi"},{default:(0,o.w5)((()=>[(0,o.Uk)("Xiaomi")])),_:1})])]),l,c,s,h])]),(0,o.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,o.kq)(" Notes END: Do not edit below this line "),p,(0,o._)("p",null,[(0,o.Uk)("This device supports OTA updates, for more information see "),(0,o.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("OTA updates")])),_:1}),(0,o.Uk)(".")]),m])}]])}}]);