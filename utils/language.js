module.exports = {
    languages: {
       
        en: {
            app: {
                name: "Video-driven Virtual Character Animated System",
            },
            titlebar: {
                modelLib: "library",
                mocap: "cap",
                settings: "setting",
            },
            tabModelLib: {
                userModel: "User's Models",
                buildinModel: "Built-in Models",
                optAdd: "Import",
                optHide: "Hide",
                dragModel: "Drag model here",
                suppotFormat: "Supported VRM/GLB/GLTF/FBX",
                dragImage: "Drag image here",
                open: "Open",
                setAsDefault: "Set as default",
                showInFinder: "Show in Finder",
                remove: "Remove",
            },
            tabMocap: {
                chooseModel: "3D Model：",
                dataSource: "Source：",
                camera: "Camera",
                videoFile: "Video File",
                start: "Start",
                stop: "Stop",
                chooseVideo: "Choose Video File",
                choosedVideo: "Choosed Video File: ",
                unchoosed: "Unchoosed",
                chooseCamera: "Choose Camera",
            },
            tabSettings: {
                disableUpdate:'Disable Checking Update Automatically',
                desc: "By Xianfei, as Undergraduate Graduation Design Works",
                document: {
                    name: "User Manual",
                    openDoc: "Show the User Manual",
                },
                ui: {
                    name: "Interface",
                    themeColor: "Themed Color",
                    isDark: "Use Dark Mode",
                    useGlass: "Use Frosted Glass Effect",
                    language: "Language",
                },
                preview: {
                    name: "Real-time Preview",
                    showSketelonOnInput: "Show Bones Sketelon on Input Source",
                    mirroringWhenCamera:
                        "Horizontal Mirror Flip when Camera as Input",
                    mirroringWhenVideoFile:
                        "Horizontal Mirror Flip when Video File as Input",
                },
                performance: {
                    name: "Performance",
                    gl: "Current GL Device: ",
                    forcedDGPU:
                        "Use Discrete Graphics when Dual GPU （Need Reopen）",
                        useDescrertionProcess: "Use Descretion Process for Motion Capture（Need Reopen）",
                },
                output: {
                    name: "Virtual Character Output",
                    antialias: "Enable Antialias",
                    usePicInsteadOfColor:
                        "Use Picture as Background instead of Color",
                    bgColor: "Background Color",
                    bgPicPath: "Background Picture (click to change)",
                },
                forward: {
                    name: "Mocap Data Forward",
                    enableForwarding: "Enable Forward via HTTP & WebSocket",
                    port: "Port Number of HTTP & WebSocket",
                    useSSL: "Enable Security Protocol（HTTPS/WSS）",
                    supportForWebXR: "Support for WebXR (AR/VR) ",
                    webXRtips:"WebXR needs HTTPS protocol, this system will listen both HTTPS and HTTP at same port.",
                },
                mediapipe: {
                    name: "Motion Capture",
                },
                input:{
                    name: "Input",
                },
                dev: {
                    name: "Developer",
                    allowDevTools: "Show Entrance for DevTools",
                    openDevToolsWhenMocap: "Open DevTools when Mocap Started",
                    showGpuInfo: "Open GPU Info Page",
                },
                about:{
                    name: "About",
                    paper:"Relation Papers:",
                }
            },
            modelVierer: {
                fullSupport: "Full Mocap Support",
                partialSupport: "Partial Mocap Support",
                noSupport: "No Support",
                showSketelon: "Show Bones Controller",
                hideSketelon: "Hide Bones Controller",
                modifyDecoration: "Modify Decoration",
                back: "Save & Back",
                changeBonesBinding: "Change Bones Binding",
                edit: "Edit Avatar Info",
                hide: "Hide",
                show: "Show",
            },
        },
    },
};
