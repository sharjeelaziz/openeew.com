(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),i=(a(0),a(202)),c={id:"analyze-historic",title:"Analyze OpenEEW data",sidebar_label:"Analyze OpenEEW data"},o={id:"analyze-historic",title:"Analyze OpenEEW data",description:"There are various methods you can use to read historic OpenEEW data, in order to test new algorithms. Here we provide an example with our Python library.",source:"@site/docs/analyze-historic.md",permalink:"/docs/analyze-historic",editUrl:"https://github.com/openeew/openeew-docs/edit/master/docs/analyze-historic.md",sidebar_label:"Analyze OpenEEW data",sidebar:"someSidebar",previous:{title:"OpenEEW sensor dataset",permalink:"/docs/historic-data"},next:{title:"Develop Machine Learning model",permalink:"/docs/machine-learning"}},l=[{value:"OpenEEW data with Python",id:"openeew-data-with-python",children:[{value:"Installing requirements",id:"installing-requirements",children:[]},{value:"Finding earthquake details",id:"finding-earthquake-details",children:[]},{value:"Getting device locations",id:"getting-device-locations",children:[]},{value:"Getting accelerometer records",id:"getting-accelerometer-records",children:[]},{value:"Comparing maximum accelerations",id:"comparing-maximum-accelerations",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are various methods you can use to read historic OpenEEW data, in order to test new algorithms. Here we provide an example with our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#openeew-data-with-python"}),"Python library"),"."),Object(i.b)("p",null,"Here you can find ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tclements/OpenEEW.jl"}),"a package using Julia")," for working with OpenEEW data, created by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tclements"}),"Tim Clements"),"."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/lermert"}),"Laura Ermert")," has created ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/lermert/grillo_ruido"}),"tools in python and Julia")," to facilitate working with OpenEEW data, for example converstion to MSEED format."),Object(i.b)("p",null,"We also have a dashboard ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openeew/openeew-nodered"}),"in Node-RED")," that allows you to view historic data."),Object(i.b)("h2",{id:"openeew-data-with-python"},"OpenEEW data with Python"),Object(i.b)("p",null,"Presently you can use the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypi.org/project/openeew/"}),"OpenEEW package for Python")," to download and analyze OpenEEW accelerometer data."),Object(i.b)("p",null,"This tutorial allows you to get started working with OpenEEW accelerometer data in Python (version 3.5 or later) by analyzing a magnitude 7.2 earthquake that occurred in Mexico on 16 February 2018."),Object(i.b)("p",null,"The code is available as a Jupyer notebook from our github ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openeew/openeew-python/blob/master/notebooks/exploring_openeew_data.ipynb"}),"repo"),"."),Object(i.b)("h3",{id:"installing-requirements"},"Installing requirements"),Object(i.b)("p",null,"To install openeew, you can use pip(for Python 3.5 or later):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"pip install openeew\n")),Object(i.b)("p",null,"To reproduce the results of this tutorial, you will also need to install some other packages:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"pip install folium plotnine geopy\n")),Object(i.b)("h3",{id:"finding-earthquake-details"},"Finding earthquake details"),Object(i.b)("p",null,"Mexico's national seismological service (SSN) has a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www2.ssn.unam.mx:8080/sismos-fuertes/"}),"catalog")," of past earthquakes. Here, you can find details of the magnitude 7.2 earthquake that struck near the coast of Oaxaca on 16 February 2018, which we will store in a dict variable for later use:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"    # Get earthquake location and datetime\n    eq = {\n        'latitude': 16.218,\n        'longitude': -98.0135,\n        'date_utc': '2018-02-16 23:39:39'\n        }\n")),Object(i.b)("p",null,"Using the folium package, we can visualize the epicenter on a map:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"    import folium\n\n    # Create map centered at earthquake epicenter\n    m = folium.Map(\n            location=[eq['latitude'], eq['longitude']],\n            zoom_start=7\n            )\n\n    # Add circle to indicate epicenter\n    folium.Circle(\n        radius=10000,\n        location=[eq['latitude'], eq['longitude']],\n        color='crimson',\n        fill='crimson',\n        ).add_to(m)\n")),Object(i.b)("p",null,"This produces a beautiful interactive map with the epicenter shown as a crimson circle:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/pythonmap-1.png",alt:"Earthquake epicenter (map produced using folium)"})),Object(i.b)("em",{parentName:"p"},"Earthquake epicenter (map produced using folium)")),Object(i.b)("h3",{id:"getting-device-locations"},"Getting device locations"),Object(i.b)("p",null,"The next step is to see where OpenEEW's seismic devices were located at the time of the earthquake. This is straightforward using OpenEEW:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"    # Import the AwsDataClient class\n    from openeew.data.aws import AwsDataClient\n\n    # Initialize client object with 'mx'\n    # This means we want data for Mexico\n    data_client = AwsDataClient('mx')\n\n    # Get device metadata as of the earthquake date\n    devices = data_client.get_devices_as_of_date(eq['date_utc'])\n")),Object(i.b)("p",null,"Now we can add the device locations to the map from above:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"    for d in devices:\n        folium.Marker(\n            [d['latitude'], d['longitude']],\n            popup = folium.Popup(\n                d['device_id'],\n                sticky=True\n                )\n            ).add_to(m)\n")),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/pythonmap-2.png",alt:"Epicenter and device locations (map produced using folium)"})),Object(i.b)("em",{parentName:"p"},"Epicenter and device locations (map produced using folium)")),Object(i.b)("p",null,"We see that the majority of devices are deployed along the Pacific coast of Mexico, which is its most seismically active region."),Object(i.b)("p",null,"Clicking on the blue markers, we can see the corresponding device IDs:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/pythonmap-3.png",alt:"Devices closest to epicenter (map produced using folium)"})),Object(i.b)("em",{parentName:"p"},"Devices closest to epicenter (map produced using folium)")),Object(i.b)("h3",{id:"getting-accelerometer-records"},"Getting accelerometer records"),Object(i.b)("p",null,"Now we know where the different devices were located at the time of the earthquake, we would like to see their accelerometer records. This can be achieved using the method ",Object(i.b)("inlineCode",{parentName:"p"},"get_filtered_records")," together with the function ",Object(i.b)("inlineCode",{parentName:"p"},"get_df_from_records"),", which returns the accelerometer records as a pandas.DataFrame:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"    from openeew.data.df import get_df_from_records\n\n    # Specify start and end dates in UTC\n    start_date_utc = '2018-02-16 23:39:00'\n    end_date_utc = '2018-02-16 23:43:00'\n\n    # Get records for the specified dates\n    records_df = get_df_from_records(\n        data_client.get_filtered_records(\n            start_date_utc,\n            end_date_utc\n            )\n        )\n")),Object(i.b)("p",null,"For plotting purposes, we extract a ",Object(i.b)("inlineCode",{parentName:"p"},"datetime.datetime")," object from the Unix time ",Object(i.b)("inlineCode",{parentName:"p"},"sample_t")," and then select the required columns:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"    from datetime import datetime\n\n    # Get UTC date from Unix time sample_t\n    records_df['sample_dt'] = \\\n        records_df['sample_t'].apply(\n            lambda x: datetime.utcfromtimestamp(x)\n            )\n\n    # Select required columns\n    records_df = records_df[\n        ['device_id', 'x', 'y', 'z', 'sample_dt']\n        ]\n")),Object(i.b)("p",null,"Looking at the first few rows with ",Object(i.b)("inlineCode",{parentName:"p"},"results_df.head()")," gives:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"device_id"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"x"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"y"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"z"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"sample_dt"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"000"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-0.155"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.158"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.015"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2018-02-16 23:38:59.602")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"000"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-0.128"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.158"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.128"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2018-02-16 23:38:59.634")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"000"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-0.158"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.128"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.068"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2018-02-16 23:38:59.666")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"000"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-0.177"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.128"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.121"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2018-02-16 23:38:59.698")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"000"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-0.132"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.177"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"0.102"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2018-02-16 23:38:59.730")))),Object(i.b)("p",null,"To visualize these records, we use the package plotnine and a simple function that outputs a plot of the x-, y- and z-axes for a given ",Object(i.b)("inlineCode",{parentName:"p"},"device_id"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"    import plotnine as pn\n\n    def plot_seismograms(device_id):\n\n        # Get earthquake date as datetime.datetime object\n        eq_dt = AwsDataClient._get_dt_from_str(eq['date_utc'])\n\n        plots = []\n        for axis in ['x', 'y', 'z']:\n            plots.append(\n                pn.ggplot(\n                    records_df[records_df['device_id'] == device_id],\n                    pn.aes('sample_dt', axis)\n                    ) + \\\n                pn.geom_line(color='blue') + \\\n                pn.scales.scale_x_datetime(\n                    date_breaks='1 minute',\n                    date_labels='%H:%M:%S'\n                    ) + \\\n                pn.geoms.geom_vline(\n                    xintercept=eq_dt,\n                    color='crimson'\n                    ) + \\\n                pn.labels.ggtitle(\n                    'device {}, axis {}'.format(\n                          device_id, axis)\n                          )\n                    )\n\n        # Now output the plots\n        for p in plots:\n            print(p)\n")),Object(i.b)("p",null,"From the map above, we see that the closest station to the epicenter was 004, but unfortunately this device was not sending data at the time. Indeed, maintaining device connectivity is one of the challenges of managing a seismic network. The next closest station was 006, which we pass to our function:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"    plot_seismograms('006')\n")),Object(i.b)("p",null,"This gives the following output for the x-axis:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/pyplot1.png",alt:"Accelerometer records for device 006 (plot created using plotnine)"})),Object(i.b)("em",{parentName:"p"},"Accelerometer records for device 006 (plot created using plotnine)")),Object(i.b)("p",null,"We see that this device recorded some large accelerometer values (in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Gal_(unit)"}),"Gal"),", where 1 Gal = 1cm/s\xb2), as we would expect by its proximity to the epicenter. The crimson vertical line, which shows when the earthquake started, is about 10 seconds before the shaking started to affect this sensor."),Object(i.b)("p",null,"Now we have an idea how the earthquake affected nearby devices, let's have a look at one further away. Going back to the map, we see that there was a device, 000, located in Mexico City, more than 350km away:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/pythonmap-4.png",alt:"Device located in the south of Mexico City (map produced using folium)"})),Object(i.b)("em",{parentName:"p"},"Device located in the south of Mexico City (map produced using folium)")),Object(i.b)("p",null,"For this device, ",Object(i.b)("inlineCode",{parentName:"p"},"plot_seismogram")," outputs the following for the x-axis:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/pyplot2.png",alt:"Accelerometer records for device 000 (plot created using plotnine)"})),Object(i.b)("em",{parentName:"p"},"Accelerometer records for device 000 (plot created using plotnine)")),Object(i.b)("p",null,"We immediately note some differences from the first plot:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"the acceleration values are much lower")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"more time passed after the earthquake began before it was detected: approximately 1 minute compared to 10 seconds for the closest device"))),Object(i.b)("p",null,"The first point highlights that shaking caused by an earthquake changes with distance from the epicenter, while the second point highlights the window of opportunity after an earthquake is first detected to send alerts to faraway locations before shaking there begins."),Object(i.b)("p",null,"The challenge is therefore to accurately estimate how shaking will be felt in faraway locations and to do so quickly before shaking in those locations begins."),Object(i.b)("h3",{id:"comparing-maximum-accelerations"},"Comparing maximum accelerations"),Object(i.b)("p",null,"To see how distance affects the level of shaking, it is interesting to compare the maximum acceleration of each device with distance from the epicenter."),Object(i.b)("p",null,"Here we calculate the maximum horizontal acceleration of each device:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"    # For each device, get max acceleration of horizontal axes\n    # Store these values as pandas Series\n    pgas = pd.Series(name='pga')\n    pgas.index.name = 'device_id'\n\n    for device_id in records_df.device_id.unique():\n        # Get horizontal axes from device metadata\n        horizontal_axes = [\n            d['horizontal_axes'] for d in devices\n            if d['device_id'] == device_id\n        ][0]\n\n        # Get max accel as sqrt of sum of squares of horizontal axes\n        pgas[device_id] = \\\n            (records_df[records_df['device_id'] == device_id][horizontal_axes] ** 2) \\\n            .sum(axis=1) \\\n            .pow(0.5) \\\n            .max()\n")),Object(i.b)("p",null,"We can then combine these values with the device metadata:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"    from geopy.distance import distance\n\n    # Use a pandas DataFrame for convenience\n    devices_df = pd.DataFrame(devices)\n\n    devices_df = devices_df[\n        [\n            'device_id',\n            'latitude',\n            'longitude'\n        ]\n    ]\n\n    # Use the geopy.distance.distance function\n    # to get distance from devices to epicenter\n    devices_df['dist_from_eq'] = devices_df.apply(\n        lambda r: round(\n            distance(\n                (r['latitude'], r['longitude']),\n                (eq['latitude'], eq['longitude'])\n                ).km, 3),\n            axis=1\n        )\n\n    devices_df = devices_df.merge(pgas, left_on='device_id', right_index=True)\n")),Object(i.b)("p",null,"Finally, we create a plot using this code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"    # Plot using linear scale\n    pn.ggplot(\n            devices_df,\n            pn.aes('dist_from_eq', 'pga')\n            ) + \\\n        pn.geom_point(color='blue') + \\\n        pn.labels.ggtitle('PGA vs distance from epicenter')\n")),Object(i.b)("p",null,"which gives:"),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/docs/pga-distance.png",alt:"How shaking changes with distance (plot created using plotnine)"})),Object(i.b)("em",{parentName:"p"},"How shaking changes with distance (plot created using plotnine)")),Object(i.b)("p",null,"We see that the maximum acceleration decreases exponentially as distance from epicenter increases."))}p.isMDXComponent=!0},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,u=d["".concat(c,".").concat(m)]||d[m]||b[m]||i;return a?r.a.createElement(u,o(o({ref:t},s),{},{components:a})):r.a.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);