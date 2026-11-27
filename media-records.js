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
    },
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/k03-mechanism.mp4",
      "originalSha256": "938756d6744c44141d94dad9176050d5b8f82024eef29e298ffa52ad58ba0fde",
      "publicSha256": "984dac36809123d39869df3f53f84c74ff259a6c820bf78c5acdb6e32aa89602",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "Both doors of the self-closing fridge are opened to their stop (door 1 at 110 deg; door 2 reads 99.8 deg one step after being set to 110 deg, probably against the side wall) and released together, then released together from 60 deg. Each closes by itself: within 5 deg after 6.01 s and 5.61 s from the stop and 4.61 s and 4.46 s from 60 deg of physics time, stopping at 0 deg without bouncing open. The bottle in the fridge, the cup on the counter and the saucer on the placemat stay put. The robot keeps its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 1/120 s per step (verified); 9 s per release, one frame every 8 steps at 15 fps, so the clip plays in real physics time; 18 s clip",
      "renderDateUTC": "2026-11-27"
    }
  ],
  "O02": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/o02-mechanism.mp4",
      "originalSha256": "547e61f139f7d385729a0d2927099a00ffa52ef461d4d018823400d83aa2304c",
      "publicSha256": "333b2013e11550a9058066ae3ebd7488b6cce80e4af2392759e927f1d53e6fb3",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The two boxes now start on an office table beside the robot (top 0.75 m), not on the reception desk behind it. Each box has a carry handle across its top that one hand can grip. The door leaf is released at about 86 deg, swings slowly back to 60 deg over about 120 s (delayed-action closer) and then closes by itself. The robot, the cart and the boxes stay still.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 1/120 s per step; 144 s shown at 8x; clip 18 s",
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
      "publicSha256": "2fc89e8d47a3ec06cc75264756e67072154579afe1497cf489bd55d3156a0e3e",
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
      "publicSha256": "bbd0a754e0e88cd8418f3bee7ddd2335a8c6369a0b137e975c6caaa3101039e2",
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
      "publicSha256": "8d5790a4737aa64343efd978b80fa00dec53f76d7e403f4449cd4bc0aac2714c",
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
      "publicSha256": "cfbeadfc34276b19ad2cfbc7c0f77365d040f453f830daa46ab5d4ae80e31d5e",
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
      "publicSha256": "80281b3ec24305ba4edf62548ba51cada27e3bda2f0452586fd9235060d2d98a",
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
      "publicSha256": "c56316900c3b96fe4f32074f4652ab4dddbcc193a64afa9cbea9ffdcaabd63ad",
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
      "publicSha256": "3a76d652c0e645c06674c9da0b81f78e5649f6ec21ee48734ddd0082e3aee9b6",
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
      "publicSha256": "d590af241868557cf2372b23ac89b3b29538014363845f5c1a4e20c93133b83e",
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
      "publicSha256": "d9cf375394a71e96ee088977bf8e5724d183eebf75e338d6d8a0ec7643795483",
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
      "originalSha256": "08137a7d65fec1acaa4153b1af139f3849c61fa8deec4cfe467bf70bbfc9d043",
      "publicSha256": "9a20ad7750cf4a1e4dc3c8fbd8116dbc965faac27f61c8f052a08d9db2af2bf5",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The chest-freezer lid is released once from 90 deg and once from 60 deg and closes by itself: within 5 deg after 1.81 s and 0.71 s of physics time, stopping within 0.02 deg without bouncing open. Three small YCB packages sit inside. The robot keeps its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 1/120 s per step (verified); 6 s per release, one frame every 8 steps at 15 fps, so the clip plays in real physics time; 12 s clip",
      "renderDateUTC": "2026-11-27"
    }
  ],
  "N02": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n02-mechanism.mp4",
      "originalSha256": "8f112e1b627016ac1a572d9cb4c5f16f55914c9729d296247870bddbbec77631",
      "publicSha256": "6dce8b1e4fb9065934a79a7f72f65eae611a6f7afefe00f3f969dad5d8dc72ec",
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
      "originalSha256": "4563119b219c870daaa3644f9450dccfc86541bd253c27d2cb4888f9d6630e9a",
      "publicSha256": "80f283cadecdb482458abaa7c0e913b23fe5a5e7367cd8ba90c67b6229ec29cc",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The lid of the blue wheelie bin is released once from 75 deg and once from 60 deg and closes by itself: within 5 deg after 1.01 s and 0.61 s of physics time, without bouncing open. A grip was added to the lid front. The robot keeps its start pose and is out of view.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 1/120 s per step (verified); 5 s per release, one frame every 8 steps at 15 fps, so the clip plays in real physics time; 10 s clip",
      "renderDateUTC": "2026-11-27"
    }
  ],
  "N05": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n05-mechanism.mp4",
      "originalSha256": "ab1779312d158915f2e72fdfcec5f0e9b04e6b9ad5752d45740d83b8e83212db",
      "publicSha256": "9480ed344ce156643be7bfa225dfb46523686e1dbd030afbdc7aa0a31d96589b",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "Motorised shutter: one press of the wall button raises it to fully open in about 4 s; it stays open 10 s and lowers by itself; a press while it is coming down sends it back up, and it finally closes. The status light is green while the shutter is not fully closed and red when closed. A lidded saucepan stands on the cart. The robot keeps its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 120 Hz; 36 s self-check played at 1.5x, 24 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N06": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n06-mechanism.mp4",
      "originalSha256": "e1d034749bfb279506939577a51b1be73f7d3de6e1ea5da9e593a352422dc2cc",
      "publicSha256": "53826fc01da8290c91a8232cb62501236d336639e6265b5d754775a6225a4d79",
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
      "publicSha256": "bf3793b5177cbc0086db39f059dcab9bdd0338394f0bd9c896d1757c2f7b6afe",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The gate wings close from fully open, stay closed 6 s, open, stay open 20 s and close again in a loop; the signal switches between a green arrow and a red cross. A desk organiser with a grip bar stands on the small table; the side table is east of the gate. The robot keeps its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 120 Hz; 40 s self-check played at 2x, about 21 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N10": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n10-mechanism.mp4",
      "originalSha256": "833759be2815107e7b60cb1edc2b4b21f3688e9d4ba6413d15535cf92dfbde11",
      "publicSha256": "2a71b6a319b095907e55bb4a43fcfcf1cd5dea5b2c3d2c9e05356edfd91c3f87",
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
      "publicSha256": "8c81ffdebdd9f45f45720e43e102caf1f2eb76689b9fc68eee20f5dc2b3163c6",
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
      "publicSha256": "140cb3078016c719fe2cb9702fb066f66a3d6ea9a53ad17650b4fb073dbfc85b",
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
      "publicSha256": "671e05a5981d3be214ba04647337163fc9f98bcb3441eef4cddf8fd9cf7204a3",
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
      "publicSha256": "56be63434cd51cdeb1609c5536e381fffb946f28bf18a2f41b2c92c7622119d8",
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
      "publicSha256": "e93ef408025af7fde91ffb175bf6037744671978ef3fd11e5d10c43743e30e82",
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
      "publicSha256": "a05906f0997f4b02265001fe36e388ee4ace0e83eb3db320b81c1e500c8f6a41",
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
      "publicSha256": "8537ffe8841dc5c7915abbea9f75a5584041ab316162f8bac72af91f9fcf6d5b",
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
      "publicSha256": "a49c636dff9b47a83de0fc5c83ec6bc122694811930fa8c7ab5531d60f84c697",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The freight cart with a lift saddle on its side drives straight, turns left, drives straight and stops; the saddle then lowers 10 cm. The robot keeps its start pose and nobody holds the other end, so the board is dragged off its pallets and falls: a physical result, not a task demonstration.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 120 Hz; about 98 s route played at 6x, about 16 s clip",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N11": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n11-mechanism.mp4",
      "originalSha256": "3c860036ef42cd496d18ac8dc93abc7c6f0c762bc2b9dc6d955d5f3f37370a6f",
      "publicSha256": "e4d83653cb33e8101eb85b26473fa6a14507dac2a07cd41e80e399b8a9ee750e",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "A tabletop cleaning robot, built at the real size of a WINBOT W1 PRO, drives a Z path over the long table and touches the stapler, the tape measure and the video camera in turn (physics time 14.99, 30.01 and 45.01 s), pushing each off the table edge. Nobody picks them up. The robot keeps its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 120 Hz; 55 s self-check, one frame every 16 steps, played at 2x, 27.5 s clip",
      "renderDateUTC": "2026-11-27"
    }
  ],
  "W05": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/w05-mechanism.mp4",
      "originalSha256": "83cd577c228054f8bb63336ab405457ac8499d45dfe7e0e1dfe154fc2ac87dbc",
      "publicSha256": "9687d254300f23e58437cdfcc488c0b53c4585b3c97f9ec8bb3e121cae2256f0",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The tugger runs one loop: it leaves after a 30 s stop and returns to the stop after about 92 s. The two toolboxes sit on the pick table and the staging table is clear of the loading stand. The robot keeps its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 1/120 s per step; one 92 s loop, one frame every 64 steps at 15 fps, so the clip plays at 8x; 11.5 s clip",
      "renderDateUTC": "2026-11-27"
    }
  ],
  "N04": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n04-mechanism.mp4",
      "originalSha256": "4ac61eca56bad224318bc1bef8e132793fb2fe52f5ec838e9282e223154fd9dd",
      "publicSha256": "0839671430a80a0319f4b57fff3cf400a19c9421fd0f10fbd69af43e007181d2",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "Self-check; the robot keeps its start pose. 0-2 s: the empty N10 cart stands on the flat floor at the foot of the ramp and the red toolbox on the table; nothing moves. 2-7 s: the self-check sets the empty cart in the yellow loading zone on the 0.95 deg ramp and lets go: it rolls back 1.40 m. 7-13 s: the cart is set in the zone again and an evaluation-side hold rig (a spring on the push bar, about 1.07 N) holds it; the self-check puts the toolbox on the top shelf (no hand does this). The cart moves 2.9 mm and the toolbox comes to rest. 13-18 s: the rig lets go and the loaded cart rolls back 1.48 m with the toolbox.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 120 Hz; 18 s self-check, one frame every 8 steps, played at 1x, 18 s clip; main view the loading zone, top-right inset the whole scene",
      "renderDateUTC": "2026-11-27"
    }
  ],
  "K04": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/k04-mechanism.mp4",
      "originalSha256": "9e21e2d7af5f1afd05f6eade2f20edfdce49376fb02bda464728adef86fb2ec3",
      "publicSha256": "9593d6f0178e746a73c8a388351230f0aab8271758e5c68079cf60cea3b36e0c",
      "label": "Mechanism demo · robot stays still · not a solution",
      "outcome": "The lift-up wall-cabinet door is released once from its 46 deg stop and once from 40 deg and closes by itself: within 5 deg after 0.91 s and 0.86 s of physics time, stopping at 0.04 deg without bouncing open. The cabinet hangs at 1.28 m with a 46 deg opening stop, and the cup, plate and bowl stand on a raised rack at 0.70 m in the dishwasher. The robot keeps its start pose.",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "Physics at 1/120 s per step (verified); 6 s per release, one frame every 8 steps at 15 fps, so the clip plays in real physics time; 12 s clip",
      "renderDateUTC": "2026-11-27"
    }
  ]
};
