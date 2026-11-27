const recordings = {
  "K03": [
    {
      "kind": "scripted",
      "scope": "old-design",
      "file": "media/k03-old-flow.mp4",
      "originalSha256": "a23a25c09e4e45e4119730f7e6789142a2b2f165973078ffecca0a892861d6ff",
      "publicSha256": "1473783f407cac002fc60abf9506398f32c81cdaa78adff64f057a00c93123cf",
      "label": "Scripted · two-wheel RB-Y1 A · paused clock",
      "outcome": "Old A04 procedure. The recording does not demonstrate the revised swap with a self-closing door."
    }
  ],
  "O02": [
    {
      "kind": "scripted",
      "scope": "full",
      "file": "media/o02-scripted.mp4",
      "originalSha256": "a29ffda70d5c2c8844ce59a08959a570442c9bf39b5ee8332d72240c98e4b3fe",
      "publicSha256": "4cd936903a2fe1bbefd85c7501182a9e8cb101fd03e2c96009c6dc6d93159129",
      "label": "Scripted · two-wheel RB-Y1 A · paused clock",
      "outcome": "Full scripted pass under the legacy two-wheel, paused-clock conditions."
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/o02-mechanism.mp4",
      "originalSha256": "419cfa6f96745ec1d41bf935b8e948a845dd01a41a9d33ea819667c44a30c8a1",
      "publicSha256": "8ac239f9f09baa5297b6ccfb38d9c456895058b4730a8bf1f28e000c19e84ef2",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The cart is now a service cart with a 0.635 m deck. The door leaf is released at about 86 deg, swings slowly back to 60 deg over about 120 s (delayed-action closer) and then closes by itself. The robot and the cart stay still.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Simulation clock 120 Hz; 144 s shown at 8x; clip 18 s",
      "renderDateUTC": "2026-11-27"
    }
  ],
  "K05": [
    {
      "kind": "scripted",
      "scope": "full",
      "file": "media/k05-scripted.mp4",
      "originalSha256": "cff3e11281b77f63da40277f0a30dcab8b52b69f62e26bef4fb2518f8f89b21e",
      "publicSha256": "8ba076970618a7bf111ba01a515689a9aed945fcba921c1365e72a4e46dd2121",
      "label": "Scripted · two-wheel RB-Y1 A · paused clock",
      "outcome": "Full scripted pass of the current design (run kb-a06b-full-16): push the cart out of the path, take the extinguisher off its rack, return to the marked area before the fire limit. Three views at 4x speed."
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/k05-mechanism.mp4",
      "originalSha256": "3d8ba4a7475d2cf704d5b00dcb1f07ab77096661159c69c2f100601416a31a54",
      "publicSha256": "fa319f12afc875c3ad90feea00cba604a32c5bddf1d962b14f7fcbae9470bf8e",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The stove fire lights at 5 s and grows to full size over the next 60 s. The extinguisher on the wall and the cart in the aisle stay put; the robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Task clock counted at 1/120 s per step; 71 s shown at 4x; clip 18 s (this kitchen's physics actually steps at 1/60 s, see docs/design-changes-K05.zh.md)",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "K02": [
    {
      "kind": "scripted",
      "scope": "full",
      "file": "media/k02-scripted.mp4",
      "originalSha256": "91128586e0f83d82007e6e1d55626f73ae5c5ac6d1f019fe14606461f0cb4dd6",
      "publicSha256": "240f0629af155d9b00edcf6a8a511fddbfb11dcf16d239197e6c1350d1ad53f8",
      "label": "Scripted · two-wheel RB-Y1 A · paused clock",
      "outcome": "Full scripted pass under legacy conditions."
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/k02-mechanism.mp4",
      "originalSha256": "6f4bff53c0e200a7ae73f940a676ad49169e98f9cf2dc198b55203608af94495",
      "publicSha256": "090f46104ae3c01781c375870c7f8d18e9ccdccf80e2c1173922c288e31dbddd",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The floor robot mops the aisle lane by lane from the east wall; mopped tiles turn wet, all 80 by about 512 s. The tray with the dish and drinks stays put; the robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Task clock counted at 1/120 s per step; 560 s shown at 40x; clip 14 s (this kitchen's physics actually steps at 1/60 s, see docs/design-changes-K02.zh.md)",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "O01": [
    {
      "kind": "scripted",
      "scope": "partial",
      "file": "media/o01-departure.mp4",
      "originalSha256": "c8a35b272ff8bc5f95c078ebd8d26d77544561c94b100e45e30def18347afd0d",
      "publicSha256": "71100de1ffedc587355392a0b10269a91effd4facbfcf8d4469ed67090ebced2",
      "label": "Scripted · two-wheel RB-Y1 A · paused clock",
      "outcome": "Partial coverage: departure together; final exit at the target floor is unverified."
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/o01-mechanism.mp4",
      "originalSha256": "e5ffcf09bc7f2d0bac0da1435aa0f49fcced5f21ef6208313db736be6a469441",
      "publicSha256": "e1c1accc75e5fe9854ea4c02db0a6ce9e8b5bc7da67941dbeafd628b4f532543",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "After the hall call the elevator doors open to 0.66 m in 3.2 s, stay open 180 s and close; the floor display and button lamps follow. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Simulation clock 120 Hz; 213 s shown at 16x; clip 13 s",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "O04": [
    {
      "kind": "scripted",
      "scope": "partial",
      "file": "media/o04-forward.mp4",
      "originalSha256": "4fecbaf61db97bb14391ecb2304bb3cfeca7711b6c4918e088257685bbfece87",
      "publicSha256": "f9875e0d383fc5c132f3707f89cdd3c917739ebc70ce815eb31d8f20e11acf9f",
      "label": "Scripted · two-wheel RB-Y1 A · paused clock",
      "outcome": "Partial: forward segment."
    },
    {
      "kind": "scripted",
      "scope": "partial",
      "file": "media/o04-retreat.mp4",
      "originalSha256": "620989695f1f5574f5f83a60684e680b9683660dbc025f957c0ddb052ab0fc99",
      "publicSha256": "c20169f5bc9f909fd15198a1dbd34197e8374a2d71db8df4019bc3deeb6e912b",
      "label": "Scripted · two-wheel RB-Y1 A · paused clock",
      "outcome": "Partial: retreat segment."
    },
    {
      "kind": "scripted",
      "scope": "partial",
      "file": "media/o04-static.mp4",
      "originalSha256": "c7aaff00eabf1de97551d13472cc0115f9a21ab56565a9dcaef2816ebcca0c5f",
      "publicSha256": "104f31da5cfa17506cf374632bb0a0a86ef743d5ca55f8be031cdf26d6c23730",
      "label": "Scripted · two-wheel RB-Y1 A · paused clock",
      "outcome": "Partial: no-warning segment."
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/o04-mechanism.mp4",
      "originalSha256": "41a84acfa5dd7a5f807fafe2092ceb46e68ccf9adb5032437a210b14505b7051",
      "publicSha256": "53bbd80542115f9e485c6b33958f098d8831f0174a9521c854dd873d63936ae5",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The cart is now a service cart with a 0.635 m deck, and the unload area is a folding table against the wall (top 0.737 m). The fire doors are held open at 90 deg. After the alarm the red strobe lights, both leaves close to 10 deg within 60 s and are shut and locked at 67 s. The robot stays at its start pose; the cart and totes stay still.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Simulation clock 120 Hz; 88 s shown at 6x; clip 15 s",
      "renderDateUTC": "2026-11-27"
    }
  ],
  "O03": [
    {
      "kind": "scripted",
      "scope": "partial",
      "file": "media/o03-legacy.mp4",
      "originalSha256": "a5ba992ef898c9eca4f7d407cea62f46ff879fa776587677aebeebd003b38857",
      "publicSha256": "316690af00095c6d09a6ba0a833eef32edf222336912e7fb7e1e53bec2ac375c",
      "label": "Scripted · two-wheel RB-Y1 A · paused clock",
      "outcome": "The recording is labelled successful, but the registry accepts only segments because the full episode record is missing."
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/o03-mechanism.mp4",
      "originalSha256": "94b79ef137e195d8e20ac002d8dbedffa7b9fc93a78daf77480efe9b8dd92000",
      "publicSha256": "80246ee5a7997aa17bd0eea9b3365ef88e1499e9600406161c91604c57d772ba",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The delivery cart drives in to its stop on schedule (80 s), opens its compartment doors, waits until 710 s, closes and drives away. The robot stays at its start pose, outside this camera view.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Simulation clock 120 Hz; 742 s shown at 48x; clip 16 s",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "W01": [
    {
      "kind": "scripted",
      "scope": "full",
      "file": "media/w01-scripted.mp4",
      "originalSha256": "d666a5de1c9054f3c18e84eeecc715445100f000c0cf34609659900432e60246",
      "publicSha256": "e715e9dca263ec7f3b1dac51cdbc4274e6ed8d857627bcabbc7fe6d72643d6bd",
      "label": "Scripted · force-limited virtual planar base · clock not recorded",
      "outcome": "Paired script: A waits inside the forklift lane and is hit (failure, 114.6 s); B waits outside, then crosses (success, 169.0 s)."
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/w01-mechanism.mp4",
      "originalSha256": "52e7e70437670a9599861c92eb7dffb0ca0760797d39b2eb6cf6de4ebb2b5846",
      "publicSha256": "3a03bfae9984e6ca7c586c9b9283255f686582cd1d1464f47a9e6fb54f322cae",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The forklift shuttles along the aisle: 20 s stop, 11 s drive, one 62 s cycle; the robot stays still at the pick-up shelf.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Simulation at 120 Hz; 62 s played at 4x, about 15 s of video",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "W02": [
    {
      "kind": "scripted",
      "scope": "partial",
      "file": "media/w02-scripted.mp4",
      "originalSha256": "054f0797910cba4c2711a4798767a7778e6d647bb4ef2778c8cd2407a27d078e",
      "publicSha256": "6d34d453cefeea84c00812c7909f906dacb106db29ea41676b6040f071e05e94",
      "label": "Scripted · force-limited virtual planar base · clock not recorded",
      "outcome": "Partial: only the second half, started from a saved state, passed. The full episode is not accepted."
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/w02-mechanism.mp4",
      "originalSha256": "fd20fca88625d9584e0157ed909c190a76ba9222689f6c9fcac91896dd7f2882",
      "publicSha256": "6e14470c6c9b5db57008bfa38e9757531354224f3b55ff627169791c11a14cce",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "An evaluation-side press on the station button starts the flow and the level in the bucket rises; a second press stops it. The robot does not move.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Simulation at 120 Hz; about 25 s played at 2x, about 12 s of video",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "W03": [
    {
      "kind": "scripted",
      "scope": "full",
      "file": "media/w03-scripted.mp4",
      "originalSha256": "629fd00e9bd13e67c0d4d38cf1b05503a6bfa7ad394bc8c4bc95bb8dcde6d5d5",
      "publicSha256": "4b492cc247d41b5fb0d57d3dca116aa5fcaf7365025e31aba1bcb70b96ba9d2b",
      "label": "Scripted · force-limited virtual planar base · clock not recorded",
      "outcome": "Paired script: A sends the empty tray first (failure, 272.8 s); B loads the cargo before sending (success, 453.8 s)."
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/w03-mechanism.mp4",
      "originalSha256": "83f3e1a4ca93be83eb119a0ff7eba4a8a41ec920878ff64bc2d78ee7772a8c9f",
      "publicSha256": "aab6e2f8e0320b2704e6ea97a8d8ad802243a4366f95527cc4238caf4615e527",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The empty conveyor runs, but the belt surface shows no visible motion, so a slow camera move shows the scene: tray, item on the shelf and conveyor. The robot does not move.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Simulation at 120 Hz; 12 s played at 1x",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "W04": [
    {
      "kind": "scripted",
      "scope": "partial",
      "file": "media/w04-scripted.mp4",
      "originalSha256": "18607be1e37692fb6d564ff787f1fffcde49e347f1a505e3e28662c8f18af7b8",
      "publicSha256": "e9d6b533c19346a5e40b424bd87a1212fae75e7be6b1f342048784c10f2ef2cb",
      "label": "Scripted probe · force-limited virtual planar base · clock not recorded",
      "outcome": "Partial: an unassisted two-hand grasp of the moving box passed. The full episode with a box already in hand is not finished."
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/w04-mechanism.mp4",
      "originalSha256": "5bbbf6620f23f700699bd8a48f963d94205ad6ec12adecc62e60e90e128d4abc",
      "publicSha256": "c6964d5868bab8202c9d8a2850049f32e05f1dc30ac46533d8d2d1748cdb2d89",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The conveyor carries the incoming box toward the end at 0.003 m/s, about 0.2 m in 60 s, so the motion is small on screen; the robot does not move.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Simulation at 120 Hz; 60 s played at 4x, about 15 s of video",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N01": [
    {
      "kind": "teleop",
      "scope": "full",
      "file": "media/n01-teleop-mujoco.mp4",
      "originalSha256": "49bd9c2e7287d5a8b6431a5c8574f87d7787a15da13b57a55c0c5ef1672a9383",
      "publicSha256": "ebd656424993f3c82cb93162c245422e65ca8679452bb6755f3534d295736564",
      "label": "Human teleoperation · MuJoCo prototype · RB-Y1 M v1.3",
      "outcome": "A person teleoperates the robot through the task in the simplified MuJoCo prototype (head camera and top view). Not the Isaac scene; not a model run.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Real time, 1 min 33 s",
      "renderDateUTC": "2026-11-26"
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n01-mechanism.mp4",
      "originalSha256": "1953b253e81a1e3b523b8e668fee0e782e3c6997bb5485560019fb210103e29a",
      "publicSha256": "b5ceca380a6eac010e3d5b5d7b32dc830657843b36ba68496ad312203e93b171",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The chest-freezer lid is released once from 90° and once from 60°; it falls shut by itself. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; real time, 6 s per release",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N02": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n02-mechanism.mp4",
      "originalSha256": "8f112e1b627016ac1a572d9cb4c5f16f55914c9729d296247870bddbbec77631",
      "publicSha256": "a0bd4800b8ba6504d97e4d05f3be719734fafe7558c002ece8c7fbb3c5418532",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The revolving counter keeps carrying five covered dishes (eared plates, arch cloche handles; target cloche bright green). The robot holds its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 120 Hz; the first 36 s played at 1.5x speed, 24 s clip",
      "renderDateUTC": "2026-11-27"
    }
  ],
  "N03": [
    {
      "kind": "teleop",
      "scope": "full",
      "file": "media/n03-teleop-mujoco.mp4",
      "originalSha256": "4b5757f6bfbcfe5f383df03db0c1d8b40783bf27de875398e6033d72b972a16d",
      "publicSha256": "44cf4c3e6e12f4b26fa7481259ac4b45c2d91ae0220962f919b1772be3c08f09",
      "label": "Human teleoperation · MuJoCo prototype · RB-Y1 M v1.3",
      "outcome": "A person teleoperates the robot through the task in the simplified MuJoCo prototype (head camera and top view). Not the Isaac scene; not a model run.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Real time, 1 min 54 s",
      "renderDateUTC": "2026-11-26"
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n03-mechanism.mp4",
      "originalSha256": "2019adaed4cf31313683c4b4299d0ac1ed27eca5125c3536d2d6facda2cd6fb1",
      "publicSha256": "652b6c5d6fd83893984bccbe8829b23f74110e7de4a08c7627ac763ad53a7cd2",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The bin lid is released once from 75° and once from 60°; it falls shut by itself. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; real time, 5 s per release",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N05": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n05-mechanism.mp4",
      "originalSha256": "ab1779312d158915f2e72fdfcec5f0e9b04e6b9ad5752d45740d83b8e83212db",
      "publicSha256": "429b8fb541d870da0c1db7b2789be08232926849eb0015a688846554c3d7c2c0",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "Motorised shutter: one press of the wall button raises it to fully open in about 4 s; it stays open 10 s and lowers by itself; a press while it is coming down sends it back up, and it finally closes. The status light is green while the shutter is not fully closed and red when closed. A lidded saucepan stands on the cart. The robot keeps its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 120 Hz; 36 s self-check played at 1.5x, 24 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "W05": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/w05-mechanism.mp4",
      "originalSha256": "a56ef8c4805bcd6b121aef6cc9ed11c4a4059b61e23d8d893cabf2487c566168",
      "publicSha256": "8d5aec27121b3811e288f2ad0cd451c8313f7a5ef60b240e3419061de253d4ab",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The tugger runs one loop: it waits 30 s at the stop, leaves, and is back at the stop after about 92 s. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; one 92 s loop at 8x, 11.5 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N06": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n06-mechanism.mp4",
      "originalSha256": "e1d034749bfb279506939577a51b1be73f7d3de6e1ea5da9e593a352422dc2cc",
      "publicSha256": "0acfd5eb381d067d3a41a7dfa1658ebe0fa4bdcb82bc2532f1c05691c1d33049",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The three door wings turn steadily at 6°/s (one turn per minute), about 120° in 20 s. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; real time, 20 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N08": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n08-mechanism.mp4",
      "originalSha256": "d495970c19ab071461d0c97b06c88437a60f50d9799f557d0a5c93366e446f38",
      "publicSha256": "56f58054402c494611a1467b299693ec6db0c38f65f172d60376ba93977f9783",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The gate wings close from fully open, stay closed 6 s, open, stay open 20 s and close again in a loop; the signal switches between a green arrow and a red cross. A desk organiser with a grip bar stands on the small table; the side table is east of the gate. The robot keeps its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 120 Hz; 40 s self-check played at 2x, about 21 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "K04": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/k04-mechanism.mp4",
      "originalSha256": "60b18bfd46e22af8954d5188f1d52a15f5e0ec900a53a4db0a2390a4c07a56a4",
      "publicSha256": "cd322a0ae1d68bf4f036626ad1f338b1d5077dcbe853b861ffbf0ca4c9e41bf5",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The lift-up cabinet door is released once from 90° and once from 100°; it falls shut by itself in about 1.3–1.4 s. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; real time, 6 s per release, 12 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N10": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n10-mechanism.mp4",
      "originalSha256": "833759be2815107e7b60cb1edc2b4b21f3688e9d4ba6413d15535cf92dfbde11",
      "publicSha256": "6cd3223bb08976f5584be38780fb24dbf68610a4667ba0350fafe9ed9538fff7",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The freight trailer drives straight through the 12 m loading zone at 0.2 m/s, leaves it at 60 s and keeps going. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; 61 s of simulation at 3x, 20.3 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N12": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n12-mechanism.mp4",
      "originalSha256": "7a07bbd2a4e316fc9497a2647588ed865d5df54a6abc3d16ae353bac5c491c2f",
      "publicSha256": "a67db0eaa68099afcc7a548a9491866f04e0f47fedd94c052cda0841418deea4",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The roller door bottom bar descends from 3 m at 0.15 m/s, reaches the floor after 20 s and stays closed. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; real time, 21 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N15": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n15-mechanism.mp4",
      "originalSha256": "05c74a34a652eaff9ab2e0c1f1b4ecdf7edaa25126ae749192a632e513129970",
      "publicSha256": "a3e00dda2237d909c826c360977a4c307447aadc58020a8797e34035adc7c0cb",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The loaded handcart rolls down the 1.5% slope by itself; its front crosses the stop line at 16.2 s and the box stays on the cart. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; real time, 16.2 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "O05": [
    {
      "kind": "teleop",
      "scope": "full",
      "file": "media/o05-teleop-mujoco.mp4",
      "originalSha256": "8d8c184d4133f8c89200e044e57292fa3897b687ad568980faad329e4513ff96",
      "publicSha256": "62de133bcc96e619074653c5479f4503e2a3c05b93da4c73a90e3b49ec2978d1",
      "label": "Human teleoperation · MuJoCo prototype · RB-Y1 M v1.3",
      "outcome": "A person teleoperates the robot through the task in the simplified MuJoCo prototype (head camera and top view). Not the Isaac scene; not a model run.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Real time, 4 min 39 s",
      "renderDateUTC": "2026-11-26"
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/o05-mechanism.mp4",
      "originalSha256": "d895492f6df7850898f239824e1928336870500b1c46782b4ebe61da01a35f81",
      "publicSha256": "ca9b95115aa1da8406d5cfaecd5b6ccd58781675b848e42a552817f96845f949",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The elevator comes down from floor 7, the doors open, stay fully open for 8 s (a demo value), close, and the car is then called to another floor. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; real time, 26.5 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N07": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n07-mechanism.mp4",
      "originalSha256": "895d60b42ce31605f44504666eb6eaf9baf4b85d4a9763b7b2d07a12a86c5022",
      "publicSha256": "ec3fc8a85477802c7c7e576469eeedce0e31a4414b3a75d0792e1c5b3603ffe2",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The turntable turns steadily at 6°/s and the three jars ride one full turn. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; 60 s at 2.5x, 24 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N09": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n09-mechanism.mp4",
      "originalSha256": "5cb96d6e2c628bcb45cb49599a7e9888b862fd8308ea74c3c50a1c0c091dd6ae",
      "publicSha256": "31d1ee6be4558987f305cd680f3bcbbf0ecc8b5c5490135f84c59e86110cd6fa",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The belt barrier head is pulled out and released and retracts by itself; hooked into the far post it stays latched, and lifted it unhooks and retracts. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; 60 s at 3x, 20 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N13": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n13-mechanism.mp4",
      "originalSha256": "c35ea06a4afc4241c548ef7b10a058af147b29c072c3e140e806d45d131c198b",
      "publicSha256": "a1bb79bf6ee4b3c0d8131d21112d1b909f774cbbe351d3001efde5bb89798fd1",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "A tote rides the conveyor. Its red, yellow and blue buttons are pressed by the self-check's own spring drives, not by the robot: first in a wrong order (red, yellow, red), and the lock lamp stays red; then in the order shown on the display (yellow, blue, red), and the lamp turns green. The robot keeps its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 120 Hz; about 4.5 s self-check played at 0.375x, 12 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N14": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n14-mechanism.mp4",
      "originalSha256": "dde2929f8330db2b5e4b93e501e89df12e18da8fb4aed83ef60c615d53c18202",
      "publicSha256": "29e8ab66f8852e180b9ef7d0b3f71fe1b07383967b51cff25f8d8a7c60b04821",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The two interlocked automatic doors open and close in turn, never both at once; the lamps switch red and green. The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Sim clock 120 Hz; 40 s at 1.9x, 21 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N16": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n16-mechanism.mp4",
      "originalSha256": "618b2b2f56b670f81aca68e28e5b55beff53789225f10fc6ba4948d19c7c9b82",
      "publicSha256": "f79ad6945e1487d350e44ff96204c5a2d83337351918ca7353bb5a39ae524051",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The freight cart with a lift saddle on its side drives straight, turns left, drives straight and stops; the saddle then lowers 10 cm. The robot keeps its start pose and nobody holds the other end, so the board is dragged off its pallets and falls: a physical result, not a task demonstration.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 120 Hz; about 98 s route played at 6x, about 16 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N04": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n04-mechanism.mp4",
      "originalSha256": "667b3b43bb7a66715bdb16d0e72664e056b9279f5dae5d7cc223a762afa9beb3",
      "publicSha256": "8f2cee7a1b85dcca8d70024b9a5b0001538dcf093a490868903fa636055898a2",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "On the loading spot on the 0.95 degree slope, the released handcart slides 1.69 m in 5 s without a chock and only 0.03 m with the chock under a wheel (the self-check places cart and chock directly). The robot stays at its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics clock 120 Hz; real time, 5 s per release, 10 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N11": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n11-mechanism.mp4",
      "originalSha256": "f44b2f04038ed28b11bab640930b760b611f2a7e1447e0b50e21a0993cee882f",
      "publicSha256": "cf743e6613c65f7432f4d799f20ec85b4087a220699eb5f313d77211411b9efd",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The robot vacuum follows its fixed back-and-forth path and reaches the slipper, the cable and the paddle in turn. The robot stays at its start pose. Interim clip: in this run the vacuum moves at half the designed speed (a timing bug, being fixed), so the reach times are about 30, 60 and 90 s instead of 15, 30 and 45 s.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Each physics step is 1/60 s; about 100 s of simulation at 8x, 12.5 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ]
};
