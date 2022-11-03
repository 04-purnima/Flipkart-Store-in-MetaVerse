import { KeepRotatingComponent, RotateTransformComponent } from "@dcl/ecs-scene-utils";

export default {
    //SCENE FACING: "NORTH"/"EAST"/"SOUTH"/"WEST"
    sceneOrientation: "NORTH",
    logo: {
        bottom: {
            //image should be 512px square
            imgSrc: "images/logo.png",
            position: new Vector3(6.96862, 5.72577, 7.34845)
        },
        top: {
            name: "Harman",
            fontSize: 6,
            color: new Color3(0.1, 0.1, 0.1),
            position: new Vector3(0, 5.84663, 6.39477)
        }
    },
    socialMedia: [
        {
            name: "HOMEPAGE",
            model: "models/social_media/homepage.glb",
            link: "https://www.harmanaudio.in/",
            position: new Vector3(1.5, 1.3, -5.35)
        },
        {
            name: "TWITTER",
            model: "models/social_media/twitter.glb",
            link: "https://twitter.com/harman",
            position: new Vector3(0.5, 1.3, -5.35)
        },
        {
            name: "SAMSUNGHOME",
            model: "models/social_media/homepage.glb",
            link: "https://www.samsung.com/in/",
            position: new Vector3(-0.5, 1.3, -5.35)
        }
        // {
        //     name: "TELEGRAM",
        //     model: "models/social_media/telegram.glb",
        //     link: "https://www.telegram.org",
        //     position: new Vector3(-1.5, 1.3, -5.35)
        // }
    ],
    videoScreen: {
        src: "https://bafybeigrtrytwgrkmwb6ecegkpcmkdjker2p5plknfsasirfupqx6ds7m4.ipfs.w3s.link/harman.mp4",
        width: 1280,
        height: 720
    },
    wearable: [
        {
            name: "Desktop",
            model: "models/wearables/1.glb",
            link: "https://www.samsung.com/us/computing/",
            position: new Vector3(4.2, -0.1, 5.1),
            rotation: Quaternion.Euler(0,0,0),
            scale: new Vector3(0.2, 0.2, 0.2)
        },
        {
            name: "Monitor",
            model: "models/wearables/2.glb",
            link: "https://www.samsung.com/us/computing/",
            position: new Vector3(-4.2, -0.1, 5.1),
            rotation: Quaternion.Euler(0, 0, 0),
            scale: new Vector3(1, 1, 1)
        },
        {
            name: "Aviator",
            model: "models/wearables/aviator/scene.gltf",
            link: "https://in.harmankardon.com/",
            position: new Vector3(5.1, 2, -3.2),
            rotation: Quaternion.Euler(0, -45, 0),
            scale: new Vector3(0.4,0.4,0.4)
        },
        {
            name: "JBL", 
            model: "models/wearables/4.glb",
            link: "https://in.jbl.com/",
            position: new Vector3(-5.1, -1, -3.3),
            rotation: Quaternion.Euler(0, 90, 0),
            scale: new Vector3(1.1, 1.1, 1.1)
        },
        {
            name: "Mobile",
            model: "models/wearables/leather_jacket/scene.gltf",
            link: "https://www.samsung.com/in/smartphones/?cid=in_pd_affiliate_other_all_none_samsungeshopfest2022_notification_20220701_none-1ur-501409l-2022&product1=sm-f936bzadinu&product2=sm-f721blvainu&product3=sm-s908ezkginu",
            position: new Vector3(0, 0.5, 0.7),
            rotation: Quaternion.Euler(0, 0, 0),
            scale: new Vector3(0.2, 0.2, 0.2)
        },
        {
            name: "Speaker",
            model: "models/wearables/6.glb",
            link: "https://www.harmanaudio.in/Harman-Kardon-2",
            position: new Vector3(1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, 45, 0),
            scale: new Vector3(1.5, 1.5, 1.5)
        },
        {
            name: "Music Speaker",
            model: "models/wearables/7.glb",
            link: "https://www.harmanaudio.in/Harman-Kardon-2",
            position: new Vector3(-1, 0.7, -0.7),
            rotation: Quaternion.Euler(0, -45, 0),
            scale: new Vector3(0.5, 0.5, 0.5)
        },
        {
            name: "Speaker", //empty
            model:"models/wearables/mens_two_piece_suit/scene.gltf",
            link: "https://in.harmankardon.com/",
            position:new Vector3(-4.93,0.5,0.14),
            rotation : Quaternion.Euler(0,0,0),
            scale: new Vector3(0.5, 0.5, 0.5)
        },
    ]
}