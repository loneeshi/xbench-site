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
      "originalSha256": "2ceec6e766b22f0c10c18493add36084960e78a8f2b8b62d7035dfe8b61a82aa",
      "publicSha256": "a5fa70db8382eee4aae91c7b8aa08c0870cce63912542589b64d3823f0d554f6",
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "门扇从约 86° 自动回到关闭位置。机器人保持起点姿态。",
      "robotModel": "RB-Y1 A v1.2",
      "clock": "仿真时钟 120 Hz，144 秒仿真按 8 倍速播放，成片 18 秒",
      "renderDateUTC": "2026-11-26"
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
    }
  ],
  "N01": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n01-mechanism.mp4",
      "originalSha256": "1953b253e81a1e3b523b8e668fee0e782e3c6997bb5485560019fb210103e29a",
      "publicSha256": "b5ceca380a6eac010e3d5b5d7b32dc830657843b36ba68496ad312203e93b171",
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "冷柜盖从 90°、60° 各放手一次，自动落下关上。机器人保持起点姿态。",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "仿真时钟 120 Hz，按原速播放；两次放手各 6 秒",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N02": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n02-mechanism.mp4",
      "originalSha256": "33b9e73d0a975bd8df6d1e99f55324192655e6d0cb35a8d2b10fdd2b3f549571",
      "publicSha256": "835d2eaaf7432faf998c9e99df709be9ec3b1816b36ef20c4651239a06199eb6",
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "回转餐台载着 5 盘带盖的菜一直转动。机器人保持起点姿态。",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "仿真时钟 120 Hz，前 36 秒仿真按 1.5 倍速播放，成片 24 秒",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N03": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n03-mechanism.mp4",
      "originalSha256": "2019adaed4cf31313683c4b4299d0ac1ed27eca5125c3536d2d6facda2cd6fb1",
      "publicSha256": "652b6c5d6fd83893984bccbe8829b23f74110e7de4a08c7627ac763ad53a7cd2",
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "垃圾桶盖从 75°、60° 各放手一次，自动落下盖上。机器人保持起点姿态。",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "仿真时钟 120 Hz，按原速播放；两次放手各 5 秒",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N05": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n05-mechanism.mp4",
      "originalSha256": "9a0279a3d0950e61cfce4f1e662415e1574e6833d9968177af69191f19f9fe19",
      "publicSha256": "6113c7fe604ca3255a8ed7632095a0aaa04aad4600fa1182fd1983c0e4c2bd47",
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "卷帘从 0.55 m、0.30 m 各放手一次，自动落下关上。机器人保持起点姿态。",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "仿真时钟 120 Hz，按原速播放；两次放手各 5 秒",
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
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "牵引车沿环线跑一圈：停站 30 秒后出发，约 92 秒回到停靠点。机器人保持起点姿态。",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "仿真时钟 120 Hz，一圈 92 秒仿真按 8 倍速播放，成片 11.5 秒",
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
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "三扇门叶按 6°/s 匀速转动（一分钟一圈），20 秒里转过约 120°。机器人保持起点姿态。",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "仿真时钟 120 Hz，按原速播放；20 秒仿真，成片 20 秒",
      "renderDateUTC": "2026-11-26"
    }
  ],
  "N08": [
    {
      "kind": "mechanism",
      "scope": "full",
      "file": "media/n08-mechanism.mp4",
      "originalSha256": "f35bfbae8c61de2ea0e54eb2badc479defedc05d56cb98852fc73b16daf30136",
      "publicSha256": "94dbba238d7c1fca1457fe9d6190a00c447e6b5c82ffcfc14dfe51d105a2c476",
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "闸机门从全开到关上，关 6 秒后再打开，全开 20 秒后再关上，走完一个完整周期；信号灯随之在绿箭头和红叉之间切换。机器人保持起点姿态。",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "仿真时钟 120 Hz，40 秒仿真按 2 倍速播放，成片 20 秒",
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
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "上翻柜门从 90°、100° 各放手一次，约 1.3–1.4 秒自己落下关上。机器人保持起点姿态。",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "物理时钟 120 Hz，原速播放，两次放手各 6 秒，成片 12 秒",
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
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "运货拖车以 0.2 m/s 直行穿过 12 m 装货区，第 60 秒离开装货区后继续前进。机器人保持起点姿态。",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "物理时钟 120 Hz，61 秒仿真按 3 倍速播放，成片 20.3 秒",
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
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "卷帘门底梁从 3 m 以 0.15 m/s 下降，20 秒落地后保持关闭。机器人保持起点姿态。",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "物理时钟 120 Hz，原速播放，成片 21 秒",
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
      "label": "Mechanism demo · robot stays still · not a solution · 机关自动演示，机器人不动，不是解题过程",
      "outcome": "手推车载着货箱顺 1.5% 缓坡自己滚下，16.2 秒车头越过停止线，货箱仍在车上。机器人保持起点姿态。",
      "robotModel": "RB-Y1 M v1.3",
      "clock": "物理时钟 120 Hz，原速播放，成片 16.2 秒",
      "renderDateUTC": "2026-11-26"
    }
  ]
};
