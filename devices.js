{
  "version": "2.5.0.1",
  "ad_network": "admob",
  "recovery_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.img",
  "keywords": "phone accessories,droid,gadgets,bluetooth headset,car charger,sd card",
  "recovery_twrp_url": "http://download2.clockworkmod.com/twrp/openrecovery-twrp-%s-%s.img",
  "recovery_zip_url": "http://download2.clockworkmod.com/recoveries/recovery-clockwork-%s-%s.zip",
  "manifest": "http://developer.clockworkmod.com/merge",
  "manifest_signature": "O8+Kc2mdQz0e/AjCQn6Rw6fK5Kr5LZItJ474Ua3gF2o4IgdCQZXIbwCHIo6xeqY3pVEGtjYmmyO1PkRYcGqq2rB2wQM8SoKFl/70vG0ihEZ5TDeruKUgxVVSNM3e09kBvCxYK89GWqVWkNHtvTu1T1F9w6FilzCsNFSAXHD0Bos=",
  "owners": {
    "echen@cyngn.com": true,
    "koush@clockworkmod.com": true,
    "utkanos@gmail.com": true,
    "attn1.repo@gmail.com": true,
    "keaneyw@gmail.com": true,
    "daniel.hillenbrand@codeworkx.de": true,
    "njgreb@gmail.com": true,
    "arcee@cyanogenmod.com": true,
    "bigbeeshane@gmail.com": true,
    "cvpcsm@gmail.com": true,
    "ferguson.david@gmail.com": true,
    "playfulgod@gmail.com": true,
    "layhertony@gmail.com": true
  },
  "devices": [
    {
      "version": "2.5.0.1",
      "name": "Motorola Droid",
      "init": "init.sholes.rc",
      "alternate_recovery": {
        "name": "SPRecovery 0.99.3b",
        "clockwork": false,
        "url": "http://koush.kanged.net/cm/recoveries/sprecovery.img"
      },
      "legacy_versions": [
        "3.1.0.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.1"
      ],
      "key": "sholes"
    },
    {
      "version": "2.5.0.7",
      "name": "HTC MyTouch 3G",
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0G",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0G.img"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "sapphire"
    },
    {
      "version": "2.5.0.7",
      "name": "HTC Magic",
      "init": "init.sapphire.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0H",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-sapphire-v1.7.0H.img"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "magic"
    },
    {
      "version": "2.5.0.7",
      "name": "HTC G1/Dream",
      "init": "init.trout.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-dream-v1.7.0.img"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "dream"
    },
    {
      "version": "5.0.2.0",
      "name": "Google Nexus One",
      "init": "init.mahimahi.rc",
      "lunch": "cyanogen_passion-eng",
      "alternate_recovery": {
        "name": "RA Recovery v2.2.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-passion-v2.2.1.img"
      },
      "legacy_versions": [
        "3.0.0.5",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "3.0.0.5",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "passion"
    },
    {
      "version": "2.5.0.7",
      "name": "HTC Hero (GSM)",
      "init": "init.hero.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.7.0.1",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-hero-v1.7.0.1.img"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "hero"
    },
    {
      "version": "2.5.0.7",
      "name": "HTC Hero (CDMA)",
      "init": "init.heroc.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-heroc-v1.6.2.img"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "heroc"
    },
    {
      "version": "5.0.2.2",
      "name": "HTC Evo",
      "init": "init.supersonic.rc",
      "lunch": "cyanogen_supersonic-eng",
      "alternate_recovery": {
        "name": "RA Recovery v2.3",
        "clockwork": false,
        "url": "http://files.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-supersonic-v2.3.img"
      },
      "legacy_versions": [
        "2.5.0.7",
        "3.0.0.5",
        "3.0.0.4",
        "3.0.0.3",
        "3.0.0.5",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.2.0",
        "5.0.2.2"
      ],
      "touch_version": "5.8.0.1",
      "key": "supersonic"
    },
    {
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "name": "HTC Legend",
      "init": "init.legend.rc",
      "lunch": "cyanogen_legend-eng",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "legend"
    },
    {
      "version": "5.0.2.0",
      "name": "HTC Desire",
      "init": "init.bravo.rc",
      "lunch": "cyanogen_bravo-eng",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "touch_version": "5.8.0.2",
      "key": "bravo"
    },
    {
      "version": "5.0.2.0",
      "name": "HTC Desire CDMA",
      "init": "init.bravoc.rc",
      "lunch": "cyanogen_bravoc-eng",
      "legacy_versions": [
        "2.5.0.9",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.9",
        "5.0.0.1",
        "5.0.1.0"
      ],
      "key": "bravoc"
    },
    {
      "version": "2.5.0.7",
      "name": "Huawei Pulse Mini",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "pulsemini"
    },
    {
      "version": "5.0.2.0",
      "name": "HTC Incredible (CDMA)",
      "init": "init.inc.rc",
      "lunch": "cyanogen_inc-eng",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.02",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-inc-3.02.img"
      },
      "legacy_versions": [
        "3.0.0.8",
        "3.0.0.7",
        "3.0.0.6",
        "3.0.0.5",
        "3.0.0.8",
        "5.0.0.0",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "inc"
    },
    {
      "version": "2.5.0.7",
      "readonly_recovery": true,
      "name": "HTC Aria",
      "init": "init.liberty.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "liberty"
    },
    {
      "version": "2.5.0.7",
      "readonly_recovery": true,
      "name": "Motorola Droid Eris",
      "init": "init.desirec.rc",
      "alternate_recovery": {
        "name": "RA Recovery v1.6.2",
        "clockwork": false,
        "url": "http://www.androidspin.com/downloads.php?dir=amon_ra/RECOVERY/&file=recovery-RA-eris-v1.6.2.img"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "desirec"
    },
    {
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "name": "HTC Buzz (Wildfire)",
      "init": "init.buzz.rc",
      "lunch": "cyanogen_buzz-eng",
      "legacy_versions": [
        "3.0.0.6",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "buzz"
    },
    {
      "version": "2.5.0.7",
      "name": "Dell Streak",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "streak"
    },
    {
      "version": "2.5.0.7",
      "readonly_recovery": true,
      "name": "HTC MyTouch Slide",
      "init": "init.latte.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "espresso"
    },
    {
      "version": "2.5.1.2",
      "readonly_recovery": true,
      "name": "Samsung GalaxyS i9000",
      "init": "lpm.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "galaxys"
    },
    {
      "version": "3.0.0.8",
      "readonly_recovery": true,
      "name": "Samsung GalaxyS Fascinate",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "3.0.0.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "fascinate"
    },
    {
      "version": "2.5.1.2",
      "readonly_recovery": true,
      "name": "Samsung GalaxyS Vibrant",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "vibrant"
    },
    {
      "version": "2.5.1.2",
      "readonly_recovery": true,
      "name": "Samsung GalaxyS Captivate",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "captivate"
    },
    {
      "version": "2.5.0.7",
      "name": "Huawei Pulse",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "pulse"
    },
    {
      "version": "2.5.0.7",
      "name": "LG Ally",
      "init": "init.aloha.rc",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.2",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-aloha-2.2.2-GNM.img"
      },
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "aloha"
    },
    {
      "version": "3.1.0.2",
      "readonly_recovery": true,
      "name": "Motorola Milestone",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.7",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.0.7"
      ],
      "key": "milestone"
    },
    {
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "key": "droidx"
    },
    {
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X (2nd-init)",
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_shadow-eng",
      "legacy_versions": [
        "2.5.0.7"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "key": "shadow"
    },
    {
      "version": "2.5.1.0",
      "name": "Acer Liquid",
      "init": "init.salsa.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "salsa"
    },
    {
      "version": "2.5.1.3",
      "name": "Commtiva Z71 (Boston, Blaze, and more)",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "z71"
    },
    {
      "version": "5.0.2.7",
      "flash_recovery": "dd if=/dev/zero of=/dev/block/mmcblk0p21 bs=4096 ; dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC G2",
      "init": "init.vision.rc",
      "lunch": "cyanogen_vision-eng",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.0.5",
        "2.5.1.4",
        "2.5.1.3",
        "3.0.2.4",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.2.0",
        "5.0.2.6",
        "5.0.2.0"
      ],
      "touch_version": "5.8.1.0",
      "key": "vision"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC MyTouch 4G",
      "init": "init.glacier.rc",
      "lunch": "cyanogen_glacier-eng",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.0.5",
        "2.5.1.4",
        "2.5.1.3",
        "3.0.2.4",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "touch_version": "5.8.1.0",
      "key": "glacier"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Desire HD",
      "init": "init.spade.rc",
      "lunch": "cyanogen_ace-eng",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.0.6",
        "3.0.0.5",
        "2.5.1.4",
        "3.0.2.5",
        "3.0.2.6",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "touch_version": "5.8.1.5",
      "key": "ace"
    },
    {
      "version": "5.0.2.0",
      "name": "Motorola Cliq",
      "init": "init.morrison.rc",
      "lunch": "cyanogen_morrison-eng",
      "legacy_versions": [
        "2.5.1.2",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.2",
        "5.0.0.1",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "touch_version": "5.8.1.0",
      "key": "morrison"
    },
    {
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2",
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_droid2-eng",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "key": "droid2"
    },
    {
      "version": "2.5.1.3",
      "name": "Geeksphone ONE",
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "name": "ONE Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/10355648/recovery-ONE-1_6.img"
      },
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "one"
    },
    {
      "version": "3.0.2.7",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "name": "Advent Vega",
      "init": "init_recovery.rc",
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0",
        "2.5.1.4"
      ],
      "reboot_recovery": "echo start > /proc/ota ; ",
      "key": "vega"
    },
    {
      "version": "2.5.1.8",
      "readonly_recovery": true,
      "name": "Samsung Galaxy Tab - ATT",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "att_tab"
    },
    {
      "version": "2.5.1.8",
      "readonly_recovery": true,
      "name": "Samsung Galaxy Tab (T-Mobile)",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "2.5.1.8",
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1"
      ],
      "key": "tmobile_tab"
    },
    {
      "version": "2.5.1.2",
      "name": "Commtiva Link N700, Spice MI700, and more",
      "init": "init.qcom.rc",
      "alternate_recovery": {
        "name": "MI700 Recovery v1.6",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/15816725/MI700-recovery-V1_3.img"
      },
      "legacy_versions": [
        "2.5.1.4",
        "2.5.1.3",
        "2.5.1.1",
        "2.5.1.0"
      ],
      "key": "FM6"
    },
    {
      "version": "6.0.3.4",
      "name": "Google Nexus S",
      "init": "init.herring.rc",
      "lunch": "cm_crespo-userdebug",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.0.5",
        "3.0.0.0",
        "2.5.1.8",
        "3.0.2.4",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.2.0",
        "6.0.0.6",
        "6.0.0.7",
        "6.0.0.7",
        "6.0.0.7",
        "6.0.0.7",
        "6.0.1.0",
        "6.0.2.5",
        "6.0.3.1",
        "6.0.3.3"
      ],
      "touch_version": "6.0.3.4",
      "key": "crespo"
    },
    {
      "version": "2.5.0.8",
      "readonly_recovery": true,
      "name": "Motorola Droid Pro",
      "init": "init. mapphone_cdma.rc",
      "legacy_versions": [
        "2.5.0.8"
      ],
      "key": "droidpro"
    },
    {
      "version": "3.0.0.5",
      "name": "Huawei Ascend",
      "init": "init.qcom.rc",
      "legacy_versions": [
        "3.0.0.5",
        "3.0.0.4"
      ],
      "key": "ascend"
    },
    {
      "version": "5.0.2.0",
      "name": "ZTE Blade",
      "init": "init.blade.rc",
      "lunch": "cyanogen_blade-eng",
      "legacy_versions": [
        "3.0.1.4",
        "3.0.0.6",
        "3.0.1.4",
        "3.0.2.6",
        "3.0.2.7",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "blade"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "busybox mount -orw,remount / ; mkdir /boot ; busybox mount /dev/block/mmcblk0p1 /boot ; busybox unzip -p %1$s ramdisk-recovery.ub > /boot/uRecRam ; busybox unzip -p %1$s kernel > /boot/uRecImg ; busybox umount /boot ; rmdir /boot; busybox mount -oro,remount / ; ",
      "name": "Nook Color",
      "init": "env.txt",
      "lunch": "cm_encore-userdebug",
      "inits": [
        "env.txt",
        "init.encore.rc"
      ],
      "legacy_versions": [
        "3.0.1.0",
        "3.0.0.9",
        "3.0.0.8",
        "3.0.0.6",
        "3.0.1.0",
        "3.0.2.8",
        "3.2.0.0",
        "3.2.0.0",
        "3.2.0.1",
        "3.2.0.1",
        "3.2.0.1"
      ],
      "reboot_recovery": "dd if=/dev/zero of=/rom/bcb bs=64 count=1 ; echo 'recovery' >> /rom/bcb ; reboot ;",
      "key": "encore"
    },
    {
      "version": "5.0.2.0",
      "name": "HTC Click/Tattoo",
      "init": "init.bahamas.rc",
      "lunch": "cyanogen_click-eng",
      "legacy_versions": [
        "3.0.0.6",
        "3.0.0.6",
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "click"
    },
    {
      "version": "3.0.0.8",
      "readonly_recovery": true,
      "name": "Elocity A7",
      "init": "init_recovery.rc",
      "legacy_versions": [
        "3.0.0.8"
      ],
      "key": "a7"
    },
    {
      "version": "3.0.1.3",
      "name": "Geeksphone Zero",
      "init": "init.zero.rc",
      "legacy_versions": [
        "3.0.1.3"
      ],
      "key": "zero"
    },
    {
      "version": "5.0.2.0",
      "name": "HTC Evo Shift",
      "init": "init.speedy.rc",
      "lunch": "cyanogen_speedy-eng",
      "legacy_versions": [
        "3.0.1.4",
        "3.0.1.3",
        "3.0.1.2",
        "3.0.1.1",
        "3.0.1.4",
        "3.0.2.8",
        "3.2.0.1"
      ],
      "touch_version": "5.8.1.6",
      "key": "speedy"
    },
    {
      "officially_supported": false,
      "name": "Samsung Captivate (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "captivatemtd"
    },
    {
      "officially_supported": false,
      "name": "Samsung Showcase (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "showcasemtd"
    },
    {
      "officially_supported": false,
      "name": "Samsung Mesmerize (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "mesmerizemtd"
    },
    {
      "officially_supported": false,
      "name": "Samsung Fascinate (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "fascinatemtd"
    },
    {
      "officially_supported": false,
      "name": "Samsung Vibrant (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "vibrantmtd"
    },
    {
      "officially_supported": false,
      "name": "Samsung GalaxyS i9000B (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "galaxysbmtd"
    },
    {
      "officially_supported": false,
      "name": "Samsung GalaxyS i9000 (MTD)",
      "init": "init.aries.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "galaxysmtd"
    },
    {
      "version": "5.0.2.7",
      "readonly_recovery": true,
      "name": "Samsung Epic4G",
      "init": "lpm.rc",
      "lunch": "full_epic4g-eng",
      "legacy_versions": [

      ],
      "key": "epic4g"
    },
    {
      "version": "3.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk3p1 ; ",
      "name": "Dell Streak 7",
      "init": "init.tinyandroid.rc",
      "legacy_versions": [
        "3.0.2.0",
        "3.0.1.9",
        "3.0.1.8",
        "3.0.1.7"
      ],
      "key": "streak7"
    },
    {
      "version": "5.0.2.1",
      "name": "HTC Thunderbolt",
      "init": "init.mecha.rc",
      "lunch": "cyanogen_mecha-eng",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-mecha-3.05.img"
      },
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.3",
        "3.0.2.2",
        "3.0.2.5",
        "3.1.0.1",
        "3.1.0.2",
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.2.0"
      ],
      "touch_version": "5.8.0.2",
      "key": "mecha"
    },
    {
      "version": "3.0.2.4",
      "name": "Huawei U8150 Ideos",
      "init": "init.ideos.rc",
      "legacy_versions": [
        "3.0.2.4"
      ],
      "key": "ideos"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "name": "Motorola XOOM",
      "init": "init.stingray.rc",
      "lunch": "cm_stingray-userdebug",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.5",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.0",
        "4.0.0.1",
        "4.0.0.4",
        "6.0.2.9"
      ],
      "touch_version": "6.0.3.1",
      "key": "stingray"
    },
    {
      "version": "3.1.0.0",
      "name": "HTC HD2",
      "init": "init.leo.rc",
      "legacy_versions": [
        "3.0.2.5",
        "3.0.2.4",
        "3.0.2.5"
      ],
      "key": "leo"
    },
    {
      "version": "5.0.2.0",
      "name": "Motorola CLIQ XT/Quench (MB501)",
      "init": "init.zeppelin.rc",
      "lunch": "cyanogen_zeppelin-eng",
      "legacy_versions": [
        "3.0.2.4",
        "3.0.2.4",
        "5.0.0.8",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.0"
      ],
      "key": "zeppelin"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Desire S",
      "init": "init.saga.rc",
      "lunch": "full_saga-eng",
      "legacy_versions": [
        "3.0.2.6",
        "5.0.1.9"
      ],
      "touch_version": "5.8.1.5",
      "key": "saga"
    },
    {
      "version": "5.0.2.0",
      "readonly_recovery": true,
      "name": "LG G2X (T-Mobile)",
      "init": "init_recovery.rc",
      "lunch": "cyanogen_p999-eng",
      "legacy_versions": [
        "3.0.2.7",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6"
      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "key": "p999"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p7 ; ",
      "name": "LG Optimus 2X",
      "lunch": "cm_p990-userdebug",
      "inits": [
        "init_recovery.rc",
        "/bootimages/opening_01.rle"
      ],
      "legacy_versions": [
        "3.0.2.7",
        "3.0.2.7",
        "3.0.2.8",
        "4.0.0.9",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.4",
        "5.0.1.6",
        "5.0.2.0",
        "6.0.1.5"
      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "touch_version": "6.0.3.1",
      "key": "p990"
    },
    {
      "version": "6.0.3.3",
      "name": "Google Nexus S 4G",
      "init": "init.herring.rc",
      "lunch": "cm_crespo4g-userdebug",
      "legacy_versions": [
        "3.1.0.0",
        "3.1.0.0",
        "3.1.0.1",
        "5.0.0.0",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.2.0",
        "6.0.0.6",
        "6.0.0.7",
        "6.0.1.0",
        "6.0.2.5",
        "6.0.3.1"
      ],
      "touch_version": "6.0.3.3",
      "key": "crespo4g"
    },
    {
      "version": "5.0.2.0",
      "name": "LG Optimus One (old BB)",
      "init": "init.thunderg.rc",
      "lunch": "full_thunderg-eng",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v2.2.1",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-RA-thunderg-2.2.1-GNM.img"
      },
      "legacy_versions": [
        "3.1.0.0",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "key": "thunderg"
    },
    {
      "version": "5.0.2.7",
      "name": "LG Optimus One",
      "init": "init.thunderg.rc",
      "lunch": "cyanogen_p500-eng",
      "legacy_versions": [
        "5.0.2.0"
      ],
      "key": "p500"
    },
    {
      "version": "3.1.0.1",
      "name": "Huawei U8220/U8230",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "key": "u8220"
    },
    {
      "version": "3.1.0.1",
      "readonly_recovery": true,
      "name": "Samsung Charge",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "key": "charge"
    },
    {
      "officially_supported": false,
      "name": "Motorola Defy",
      "init": "init.mapphone_umts.rc",
      "legacy_versions": [

      ],
      "key": "umts_jordan"
    },
    {
      "version": "3.2.0.0",
      "readonly_recovery": true,
      "name": "Samsung Galaxy S 4G",
      "init": "init.smdkc110.rc",
      "legacy_versions": [
        "3.2.0.0"
      ],
      "key": "galaxys4g"
    },
    {
      "version": "4.0.1.5",
      "readonly_recovery": true,
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "name": "Samsung Galaxy S2",
      "init": "init.smdkc210.rc",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [
        "4.0.1.4",
        "v4.0.1.4"
      ],
      "touch_version": "5.8.1.5",
      "key": "galaxys2"
    },
    {
      "version": "6.0.1.0",
      "officially_supported": false,
      "ro.product.device": [
        "i9100",
        "galaxys2"
      ],
      "name": "Samsung Galaxy S2",
      "init": "init.smdk4210.rc",
      "lunch": "cm_i9100-userdebug",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [

      ],
      "key": "i9100"
    },
    {
      "version": "6.0.1.2",
      "readonly_recovery": true,
      "name": "Samsung Galaxy Note (GT-N7000)",
      "init": "init.smdk4210.rc",
      "lunch": "cm_n7000-userdebug",
      "legacy_versions": [
        "6.0.1.0"
      ],
      "key": "n7000"
    },
    {
      "version": "4.0.0.2",
      "readonly_recovery": true,
      "name": "Samsung Sidekick 4G",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "key": "sidekick4g"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Incredible S",
      "init": "init.vivo.rc",
      "lunch": "cyanogen_vivo-eng",
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "key": "vivo"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Incredible 2",
      "init": "init.vivow.rc",
      "lunch": "cyanogen_vivow-eng",
      "alternate_recovery": {
        "name": "RA_GNM Recovery v3.05",
        "clockwork": false,
        "url": "http://dl.dropbox.com/u/12949506/RomManager/recovery-ra-vivow-3.05.img"
      },
      "legacy_versions": [
        "4.0.0.4",
        "4.0.0.6",
        "4.0.0.7",
        "4.0.0.8",
        "5.0.1.9"
      ],
      "key": "vivow"
    },
    {
      "version": "6.0.1.9",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "name": "LG Optimus 3D",
      "lunch": "cm_p920-userdebug",
      "inits": [
        "init.p920.rc",
        "/bootimages/opening_01.rle"
      ],
      "legacy_versions": [
        "4.0.0.7",
        "4.0.0.9",
        "5.0.1.4",
        "5.0.2.0",
        "5.0.2.7"
      ],
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "touch_version": "6.0.1.9",
      "key": "p920"
    },
    {
      "version": "4.0.0.9",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/flash_image recoveryonly %s ; ",
      "name": "Samsung Galaxy Ace",
      "init": "init.galaxyace.rc",
      "legacy_versions": [

      ],
      "key": "galaxyace"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 ; ",
      "name": "Motorola Atrix 4G",
      "init": "init_prep_keypad.sh",
      "lunch": "generic_olympus-eng",
      "inits": [
        "init_prep_keypad.sh",
        "init.olympus.rc"
      ],
      "legacy_versions": [
        "4.0.1.0",
        "4.0.1.1",
        "3.2.0.1",
        "4.0.1.2",
        "4.0.1.3",
        "4.0.1.4",
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.1",
        "5.0.0.5",
        "5.0.0.6",
        "5.0.0.7",
        "5.0.1.0"
      ],
      "touch_version": "5.8.1.8",
      "key": "olympus"
    },
    {
      "version": "4.0.1.5",
      "flash_recovery": "/data/data/com.koushikdutta.rommanager/files/tegra_flash_image recovery %s ; ",
      "name": "Viewsonic GTablet (smb_a1002)",
      "init": "init_recovery.rc",
      "legacy_versions": [

      ],
      "key": "smb_a1002"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 ; ",
      "name": "HTC EVO 3D",
      "init": "init.shooter.rc",
      "lunch": "htc_shooter-eng",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.0",
        "5.0.1.0"
      ],
      "touch_version": "5.8.0.2",
      "key": "shooter"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC Sensation",
      "init": "init.pyramid.rc",
      "lunch": "full_pyramid-eng",
      "legacy_versions": [
        "4.0.1.5",
        "5.0.0.1",
        "5.0.0.7",
        "5.0.0.8",
        "5.0.1.0"
      ],
      "touch_version": "5.8.0.9",
      "key": "pyramid"
    },
    {
      "version": "4.0.1.5",
      "name": "Huawei Ascend 2 (M865)",
      "init": "init.qcom.rc",
      "inits": [
        "init.qcom.rc",
        "init.huawei.rc"
      ],
      "legacy_versions": [

      ],
      "key": "ascend2"
    },
    {
      "version": "4.0.1.5",
      "name": "Micromax A70",
      "init": "init.qcom.rc",
      "legacy_versions": [

      ],
      "key": "a70"
    },
    {
      "version": "4.0.1.5",
      "readonly_recovery": true,
      "name": "Samsung Galaxy Gio",
      "init": "init.galaxygio.rc",
      "legacy_versions": [

      ],
      "key": "galaxygio"
    },
    {
      "version": "4.0.1.5",
      "readonly_recovery": true,
      "name": "Samsung Indulge 910",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "key": "indulge910"
    },
    {
      "version": "4.0.1.5",
      "readonly_recovery": true,
      "name": "Samsung Indulge 915",
      "init": "init.smdkc110.rc",
      "legacy_versions": [

      ],
      "key": "indulge915"
    },
    {
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ; ",
      "name": "LG Optimus Black",
      "init": "/bootimages/ON_480x800_08fps_0000.rle",
      "lunch": "cm_p970-userdebug",
      "legacy_versions": [
        "5.0.0.0",
        "5.0.0.1",
        "5.0.0.8",
        "5.0.1.0",
        "5.0.1.1",
        "5.0.1.1",
        "5.0.1.2",
        "5.0.1.3",
        "5.0.2.0",
        "5.0.2.6"
      ],
      "touch_version": "6.0.1.4",
      "key": "p970"
    },
    {
      "version": "5.0.2.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 ; ",
      "name": "HTC EVO 3D (GSM)",
      "init": "init.shooteru.rc",
      "lunch": "full_shooteru-eng",
      "legacy_versions": [
        "5.0.1.6",
        "5.0.1.7",
        "5.0.1.8",
        "5.0.1.9"
      ],
      "touch_version": "5.8.0.2",
      "key": "shooteru"
    },
    {
      "version": "5.0.2.3",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 2 Global",
      "init": "init.mapphone_cdma.rc",
      "lunch": "cyanogen_droid2we-eng",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "key": "droid2we"
    },
    {
      "version": "5.0.2.5",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid Bionic",
      "init": "init.mapphone_cdma.rc",
      "lunch": "generic_targa-eng",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "key": "targa"
    },
    {
      "version": "5.0.2.5",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid X2",
      "init": "init.mapphone_cdma.rc",
      "lunch": "generic_daytona-eng",
      "legacy_versions": [
        "5.0.2.3",
        "5.0.2.4"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "key": "daytona"
    },
    {
      "version": "5.0.2.6",
      "readonly_recovery": true,
      "flash_recovery": "dd if=%s of=/preinstall/recovery/recovery.zip ; ",
      "name": "Motorola Droid 3",
      "init": "init.mapphone_cdma.rc",
      "lunch": "full_solana-eng",
      "legacy_versions": [
        "5.0.2.5"
      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "key": "solana"
    },
    {
      "version": "5.0.2.6",
      "name": "Motorola Backflip",
      "init": "init.motus.rc",
      "lunch": "cyanogen_motus-eng",
      "legacy_versions": [

      ],
      "key": "motus"
    },
    {
      "version": "5.0.2.6",
      "readonly_recovery": true,
      "name": "Samsung Galaxy Mini",
      "init": "init.gt-s5570.rc",
      "lunch": "tass-eng",
      "legacy_versions": [

      ],
      "key": "tass"
    },
    {
      "version": "5.0.2.6",
      "flash_recovery": "mount -o remount,rw -t vfat /dev/block/mmcblk0p1 /cust_backup ; cat %s > /cust_backup/image/recovery.img ;",
      "name": "Huawei U8800",
      "init": "init.u8800.rc",
      "lunch": "huawei_u8800-eng",
      "legacy_versions": [

      ],
      "key": "u8800"
    },
    {
      "version": "5.0.2.6",
      "readonly_recovery": true,
      "name": "Samsung Galaxy S2 (AT&T)",
      "init": "init.smdkc210.rc",
      "lunch": "cyanogen_galaxys2att-eng",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [

      ],
      "touch_version": "5.8.1.5",
      "key": "galaxys2att"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy S2 (T-Mobile)",
      "init": "init.target.rc",
      "lunch": "cm_hercules-userdebug",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7",
        "6.0.1.4",
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9"
      ],
      "owners": {
        "jmprblckwing182@gmail.com": true
      },
      "touch_version": "6.0.3.1",
      "key": "hercules"
    },
    {
      "version": "5.0.2.7",
      "readonly_recovery": true,
      "name": "Samsung Epic 4G Touch",
      "init": "init.smdkc210.rc",
      "lunch": "full_epic4gtouch-eng",
      "legacy_versions": [
        "5.0.2.6",
        "5.0.2.7"
      ],
      "touch_version": "5.8.1.5",
      "key": "epic4gtouch"
    },
    {
      "version": "5.0.2.6",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Amaze",
      "init": "init.ruby.rc",
      "lunch": "full_ruby-eng",
      "legacy_versions": [

      ],
      "key": "ruby"
    },
    {
      "version": "5.0.2.8",
      "readonly_recovery": true,
      "name": "Samsung Galaxy 5",
      "init": "init.gt-i5500.rc",
      "lunch": "samsung_galaxy5-eng",
      "legacy_versions": [
        "5.0.2.8"
      ],
      "key": "galaxy5"
    },
    {
      "version": "5.0.2.7",
      "name": "ZTE Racer",
      "init": "init.mooncake.rc",
      "lunch": "generic_mooncake-eng",
      "legacy_versions": [

      ],
      "key": "mooncake"
    },
    {
      "version": "5.0.2.7",
      "readonly_recovery": true,
      "name": "Samsung Galaxy Tab (VZW)",
      "init": "init.smdkc110.rc",
      "lunch": "full_vzwtab-eng",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "vzwtab"
    },
    {
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC MyTouch 4G Slide",
      "init": "init.doubleshot.rc",
      "lunch": "full_doubleshot-eng",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "doubleshot"
    },
    {
      "version": "6.0.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (GSM)",
      "init": "init.tuna.rc",
      "lunch": "cm_maguro-userdebug",
      "legacy_versions": [
        "5.5.0.0",
        "5.5.0.1",
        "5.5.0.2",
        "6.0.0.0",
        "6.0.0.1",
        "6.0.0.2",
        "6.0.0.3",
        "6.0.0.3",
        "6.0.0.4",
        "6.0.0.5",
        "6.0.1.0",
        "6.0.1.5",
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.3",
        "6.0.3.4"
      ],
      "touch_version": "6.0.3.5",
      "key": "maguro"
    },
    {
      "version": "6.0.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (Verizon)",
      "init": "init.tuna.rc",
      "lunch": "cm_toro-userdebug",
      "legacy_versions": [
        "5.5.0.2",
        "5.5.0.3",
        "5.5.0.4",
        "6.0.0.0",
        "6.0.0.1",
        "6.0.0.2",
        "6.0.0.3",
        "6.0.0.3",
        "6.0.0.4",
        "6.0.0.5",
        "6.0.1.0",
        "6.0.1.5",
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.3"
      ],
      "touch_version": "6.0.3.5",
      "key": "toro"
    },
    {
      "version": "5.0.2.7",
      "name": "LG Optimus C LW690 and Optimus M MS690",
      "init": "init.thunderc.rc",
      "lunch": "full_lg690-eng",
      "legacy_versions": [

      ],
      "key": "lg690"
    },
    {
      "version": "5.0.2.7",
      "name": "LG Optimus Pro",
      "init": "init.muscat.rc",
      "lunch": "c660-eng",
      "legacy_versions": [

      ],
      "key": "c660"
    },
    {
      "version": "5.0.2.7",
      "name": "LG Optimus Hub",
      "init": "init.univa.rc",
      "lunch": "e510-eng",
      "legacy_versions": [

      ],
      "key": "e510"
    },
    {
      "version": "5.0.2.7",
      "officially_supported": false,
      "name": "Samsung Epic4G (MTD)",
      "init": "init.victory.rc",
      "lunch": "cyanogen_epicmtd-eng",
      "legacy_versions": [

      ],
      "reboot_recovery": "/system/xbin/busybox devmem 0x57fff800 32 0x5EC0B007; sync ; reboot ;",
      "touch_version": "5.8.1.5",
      "key": "epicmtd"
    },
    {
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Holiday",
      "init": "init.holiday.rc",
      "lunch": "full_holiday-eng",
      "legacy_versions": [
        "5.0.2.7",
        "5.0.2.7",
        "5.0.2.7"
      ],
      "key": "holiday"
    },
    {
      "version": "5.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ;",
      "name": "LG Optimus SOL / TMo LG myTouch",
      "lunch": "e730-eng",
      "inits": [
        "init.victor.rc",
        "init.e739.rc"
      ],
      "legacy_versions": [

      ],
      "key": "e730"
    },
    {
      "version": "5.0.2.8",
      "name": "HTC Wildfire S",
      "init": "init.marvel.rc",
      "lunch": "generic_marvel-eng",
      "legacy_versions": [
        "5.0.2.7"
      ],
      "key": "marvel"
    },
    {
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ;",
      "name": "Motorola Photon 4G",
      "init": "init.mapphone_umts.rc",
      "lunch": "full_sunfire-eng",
      "inits": [
        "init.mapphone_umts.rc",
        "init.mapphone_cdma.rc"
      ],
      "legacy_versions": [
        "5.0.2.7"
      ],
      "key": "sunfire"
    },
    {
      "version": "5.0.2.8",
      "name": "Huawei U8160",
      "init": "init.u8160.rc",
      "lunch": "huawei_u8160-eng",
      "inits": [
        "init.huawei.rc",
        "init.u8160.rc"
      ],
      "legacy_versions": [
        "5.0.2.8"
      ],
      "key": "u8160"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ;",
      "name": "HTC Rezound",
      "init": "init.vigor.rc",
      "lunch": "cm_vigor-userdebug",
      "legacy_versions": [
        "5.5.0.4",
        "5.5.0.5",
        "5.8.1.3",
        "5.8.1.4",
        "5.8.1.4",
        "5.8.1.4",
        "5.8.1.4",
        "6.0.2.2",
        "6.0.2.3"
      ],
      "touch_version": "6.0.3.1",
      "key": "vigor"
    },
    {
      "version": "5.8.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ;",
      "name": "HTC EVO View 4G",
      "init": "init.expresskt.rc",
      "lunch": "full_express-userdebug",
      "legacy_versions": [

      ],
      "key": "express"
    },
    {
      "version": "5.8.3.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer Prime",
      "init": "init.cardhu.rc",
      "lunch": "cm_tf201-userdebug",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.0"
      ],
      "touch_version": "5.8.3.4",
      "key": "tf201"
    },
    {
      "version": "5.0.2.0",
      "officially_supported": false,
      "name": "Motorola Droid 4",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "key": "maserati"
    },
    {
      "version": "5.0.2.0",
      "officially_supported": false,
      "name": "Motorola RAZR",
      "init": "init.mapphone_cdma.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "rm /cache/recovery/command ; echo 1 > /data/.recovery_mode ; sync ; reboot ;",
      "key": "spyder"
    },
    {
      "version": "5.0.2.8",
      "name": "HTC Wildfire S CDMA",
      "init": "init.marvelc.rc",
      "lunch": "full_marvelc-eng",
      "legacy_versions": [

      ],
      "key": "marvelc"
    },
    {
      "version": "6.0.1.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 ;",
      "name": "Asus Transformer",
      "init": "init.ventana.rc",
      "lunch": "cm_tf101-userdebug",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.1.9",
        "5.8.2.0",
        "5.8.2.1",
        "5.8.3.4"
      ],
      "touch_version": "5.8.3.4",
      "key": "tf101"
    },
    {
      "version": "6.0.1.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 ;",
      "name": "LG Nitro HD / LG P930 (AT&T)",
      "init": "bootimages/boot_logo_00000.rle",
      "lunch": "cm_p930-userdebug",
      "legacy_versions": [
        "5.8.2.0",
        "6.0.1.4"
      ],
      "touch_version": "6.0.1.5",
      "key": "p930"
    },
    {
      "version": "6.0.1.0",
      "readonly_recovery": true,
      "name": "Samsung Galaxy S2 (SGH-I777)",
      "init": "init.smdkc210.rc",
      "lunch": "cm_i777-userdebug",
      "inits": [
        "init.smdkc210.rc",
        "init.smdk4210.rc"
      ],
      "legacy_versions": [
        "5.8.1.8"
      ],
      "touch_version": "6.0.1.0",
      "key": "i777"
    },
    {
      "version": "5.0.2.8",
      "name": "HTC Pico",
      "init": "init.pico.rc",
      "lunch": "full_pico-eng",
      "legacy_versions": [

      ],
      "key": "pico"
    },
    {
      "version": "5.8.4.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p5 bs=4096 ;",
      "name": "HTC One X (GSM)",
      "init": "ueventd.endeavoru.rc",
      "lunch": "cm_endeavoru-userdebug",
      "legacy_versions": [
        "5.8.2.6",
        "5.8.2.7",
        "5.8.2.6",
        "5.8.2.6",
        "5.8.2.8",
        "5.8.2.9",
        "5.8.3.0",
        "5.8.3.1",
        "5.8.3.5",
        "5.8.3.6",
        "5.8.3.7",
        "5.8.3.8",
        "5.8.3.9"
      ],
      "touch_version": "5.8.4.0",
      "key": "endeavoru"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ;",
      "name": "HTC One S",
      "init": "init.ville.rc",
      "lunch": "cm_ville-userdebug",
      "legacy_versions": [
        "5.5.0.4",
        "5.8.2.1",
        "5.8.2.2",
        "5.8.2.3",
        "5.8.3.1",
        "6.0.2.9"
      ],
      "touch_version": "6.0.3.1",
      "key": "ville"
    },
    {
      "version": "5.8.2.1",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and GSM)",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "p1"
    },
    {
      "version": "5.8.2.1",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and CDMA)",
      "init": "init.p1c.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "p1c"
    },
    {
      "version": "6.0.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ;",
      "name": "Google Galaxy Nexus (Sprint)",
      "init": "init.tuna.rc",
      "lunch": "cm_toroplus-userdebug",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.0.0",
        "6.0.0.1",
        "6.0.0.2",
        "6.0.0.3",
        "6.0.0.4",
        "6.0.0.5",
        "6.0.1.0",
        "6.0.1.5",
        "6.0.2.3",
        "6.0.3.1",
        "6.0.3.3"
      ],
      "touch_version": "6.0.3.3",
      "key": "toroplus"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p2 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Wifi)",
      "init": "ueventd.p3.rc",
      "lunch": "cm_p4wifi-userdebug",
      "legacy_versions": [
        "4.0.0.4",
        "5.8.3.1",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "p4wifi"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery ; ",
      "name": "Motorola XOOM (Wi-Fi only)",
      "init": "init.wingray.rc",
      "lunch": "cm_wingray-userdebug",
      "legacy_versions": [
        "5.8.3.1",
        "6.0.2.9"
      ],
      "touch_version": "6.0.3.1",
      "key": "wingray"
    },
    {
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Marquee",
      "init": "init.omap.post_boot.sh",
      "lunch": "full_marquee-eng",
      "legacy_versions": [

      ],
      "key": "marquee"
    },
    {
      "version": "5.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Ignite",
      "init": "init.omap.post_boot.sh",
      "lunch": "full_ignite-eng",
      "legacy_versions": [

      ],
      "key": "ignite"
    },
    {
      "version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Connect 4G MS840",
      "init": "init.target.rc",
      "lunch": "full_ms840-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "5.8.3.1",
      "key": "ms840"
    },
    {
      "version": "5.8.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Lucid VS840",
      "init": "init.target.rc",
      "lunch": "full_vs840-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "5.8.3.1",
      "key": "vs840"
    },
    {
      "version": "5.8.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC EVO LTE",
      "init": "init.jewel.rc",
      "lunch": "cm_jewel-userdebug",
      "legacy_versions": [
        "5.8.3.4",
        "5.8.3.4"
      ],
      "touch_version": "5.8.3.5",
      "key": "jewel"
    },
    {
      "version": "6.0.3.2",
      "ro.product.devices": [
        "i9300",
        "m0"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (GT-I9300)",
      "init": "ueventd.smdk4x12.rc",
      "lunch": "cm_i9300-userdebug",
      "legacy_versions": [
        "5.8.4.0",
        "5.8.4.1",
        "5.8.4.2",
        "5.8.4.3",
        "5.8.4.4",
        "5.8.4.5",
        "6.0.0.7",
        "6.0.0.8",
        "6.0.1.0",
        "6.0.1.2",
        "6.0.2.7",
        "6.0.3.0",
        "6.0.3.1"
      ],
      "touch_version": "6.0.3.2",
      "key": "i9300"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Skyrocket",
      "init": "init.qcom.usb.rc",
      "lunch": "cm_skyrocket-userdebug",
      "legacy_versions": [
        "5.8.4.3",
        "6.0.1.0",
        "6.0.1.4"
      ],
      "touch_version": "6.0.3.3",
      "key": "skyrocket"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Note (AT&T)",
      "init": "init.qcom.usb.rc",
      "lunch": "cm_quincyatt-userdebug",
      "legacy_versions": [
        "5.8.4.3",
        "5.8.4.8"
      ],
      "touch_version": "6.0.3.1",
      "key": "quincyatt"
    },
    {
      "version": "5.8.4.5",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L3",
      "init": "init.e0.rc",
      "lunch": "cm_e400-userdebug",
      "legacy_versions": [

      ],
      "key": "e400"
    },
    {
      "version": "5.8.4.5",
      "readonly_recovery": true,
      "name": "HTC One V",
      "init": "init.primou.rc",
      "lunch": "cm_primou-userdebug",
      "legacy_versions": [

      ],
      "key": "primou"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (AT&T)",
      "init": "init.d2att.rc",
      "lunch": "cm_d2att-userdebug",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.1",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "d2att"
    },
    {
      "version": "6.0.3.1",
      "ro.product.devices": [
        "d2tmo",
        "d2lteMetroPCS"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (T-Mobile)",
      "init": "init.d2tmo.rc",
      "lunch": "cm_d2tmo-userdebug",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "d2tmo"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Sprint)",
      "init": "init.d2spr.rc",
      "lunch": "cm_d2spr-userdebug",
      "legacy_versions": [
        "5.8.4.5",
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "d2spr"
    },
    {
      "version": "6.0.3.1",
      "twrp_version": "2.4.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Verizon)",
      "init": "init.d2vzw.rc",
      "lunch": "cm_d2vzw-userdebug",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7",
        "5.8.4.8",
        "5.8.4.9",
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "d2vzw"
    },
    {
      "version": "5.8.4.7",
      "readonly_recovery": true,
      "name": "HTC One V (CDMA)",
      "init": "init.primoc.rc",
      "lunch": "full_primoc-userdebug",
      "legacy_versions": [
        "5.8.4.6",
        "5.8.4.7"
      ],
      "touch_version": "5.8.4.7",
      "key": "primoc"
    },
    {
      "version": "6.0.3.4",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7",
      "init": "init.grouper.rc",
      "lunch": "cm_grouper-userdebug",
      "legacy_versions": [
        "6.0.0.6",
        "6.0.1.0",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.3.1"
      ],
      "touch_version": "6.0.3.4",
      "key": "grouper"
    },
    {
      "version": "6.0.1.0",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Optimus LTE (SKT)",
      "init": "init.su640.rc",
      "lunch": "cm_su640-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.1.0",
      "key": "su640"
    },
    {
      "version": "6.0.1.0",
      "officially_supported": false,
      "name": "Samsung Galaxy S2 (GT-I9100G)",
      "init": "init.t1.rc",
      "lunch": "cm_i9100g-userdebug",
      "legacy_versions": [

      ],
      "key": "i9100g"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3100)",
      "init": "init.espresso.rc",
      "lunch": "cm_p3100-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "touch_version": "6.0.2.7",
      "key": "p3100"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3110)",
      "init": "init.espresso.rc",
      "lunch": "cm_p3110-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "touch_version": "6.0.2.7",
      "key": "p3110"
    },
    {
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P3113)",
      "init": "init.espresso.rc",
      "lunch": "cm_p3113-userdebug",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "touch_version": "6.0.2.3",
      "key": "p3113"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5100)",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5100-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "touch_version": "6.0.2.7",
      "key": "p5100"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5110)",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5110-userdebug",
      "legacy_versions": [
        "6.0.1.1",
        "6.0.2.3"
      ],
      "touch_version": "6.0.2.7",
      "key": "p5110"
    },
    {
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 2 (GT-P5113)",
      "init": "init.espresso10.rc",
      "lunch": "cm_p5113-userdebug",
      "legacy_versions": [
        "6.0.1.1"
      ],
      "touch_version": "6.0.2.3",
      "key": "p5113"
    },
    {
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "LG Spectrum 4G",
      "init": "init.target.rc",
      "lunch": "cm_vs920-userdebug",
      "inits": [
        "init.target.rc",
        "init.iproj.rc",
        "init.i_vzw.rc",
        "init.iprj.rc"
      ],
      "legacy_versions": [

      ],
      "touch_version": "6.0.1.1",
      "key": "vs920"
    },
    {
      "version": "6.0.1.1",
      "name": "Score & Score M",
      "init": "init.zte.rc",
      "lunch": "cm_x500-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.1.1",
      "key": "x500"
    },
    {
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "name": "LG Revolution 4G",
      "init": "init.qcom.rc",
      "lunch": "cm_vs910-userdebug",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "legacy_versions": [

      ],
      "touch_version": "6.0.1.1",
      "key": "vs910"
    },
    {
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p14 bs=4096 ; ",
      "name": "LG Esteeem 4G",
      "init": "init.qcom.rc",
      "lunch": "cm_ms910-userdebug",
      "inits": [
        "init.qcom.rc",
        "init.bryce.rc"
      ],
      "legacy_versions": [
        "5.0.2.8"
      ],
      "touch_version": "6.0.1.1",
      "key": "ms910"
    },
    {
      "version": "6.0.1.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus M+",
      "init": "init.qcom.rc",
      "lunch": "cm_ms695-userdebug",
      "inits": [
        "init.qcom.rc",
        "init.m3.rc"
      ],
      "legacy_versions": [
        "6.0.1.0"
      ],
      "touch_version": "6.0.1.1",
      "key": "ms695"
    },
    {
      "version": "5.8.2.1",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and GSM - L)",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "p1l"
    },
    {
      "version": "5.8.2.1",
      "officially_supported": false,
      "name": "Samsung Galaxy Tab (MTD and GSM - N)",
      "init": "init.p1.rc",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 1 > /cache/.startrecovery ; sync ; reboot ;",
      "key": "p1n"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (US Cellular)",
      "init": "init.d2usc.rc",
      "lunch": "cm_d2usc-userdebug",
      "legacy_versions": [
        "6.0.1.2",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "d2usc"
    },
    {
      "version": "6.0.1.3",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Motorola Photon Q",
      "init": "init.mmi.usb.rc",
      "lunch": "cm_asanti-userdebug",
      "inits": [
        "init.asanti.rc",
        "init.sprint.rc"
      ],
      "legacy_versions": [

      ],
      "key": "asanti"
    },
    {
      "version": "6.0.1.5",
      "name": "LG Optimus Me",
      "init": "init.pecan.rc",
      "lunch": "cm_p350-userdebug",
      "legacy_versions": [
        "6.0.1.3",
        "6.0.1.4"
      ],
      "key": "p350"
    },
    {
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 8.9 (AT&T)",
      "init": "fstab.qcom",
      "lunch": "cm_p5att-userdebug",
      "legacy_versions": [

      ],
      "key": "p5att"
    },
    {
      "version": "6.0.1.4",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy S Blaze 4G",
      "init": "init.target.rc",
      "lunch": "cm_t769-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.1.4",
      "key": "t769"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (MetroPCS)",
      "init": "init.carrier.rc",
      "lunch": "cm_d2mtr-userdebug",
      "inits": [
        "init.carrier.rc",
        "init.d2mtr.rc"
      ],
      "legacy_versions": [
        "6.0.1.5",
        "6.0.2.3",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "d2mtr"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "Asus Transformer Pad Infinity",
      "init": "init.tf700t.rc",
      "lunch": "cm_tf700t-userdebug",
      "legacy_versions": [
        "6.0.1.8",
        "6.0.2.3"
      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p3 seek=6144 bs=1 ; reboot ; ",
      "touch_version": "6.0.3.1",
      "key": "tf700t"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/dw_mmc.0/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 10",
      "init": "init.manta.rc",
      "lunch": "cm_manta-userdebug",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.7",
        "6.0.1.8",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "manta"
    },
    {
      "version": "6.0.3.5",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus 4",
      "init": "init.mako.rc",
      "lunch": "cm_mako-userdebug",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.6",
        "6.0.1.8",
        "6.0.1.9",
        "6.0.2.0",
        "6.0.2.3",
        "6.0.3.0",
        "6.0.3.1",
        "6.0.3.3",
        "6.0.3.4"
      ],
      "touch_version": "6.0.3.5",
      "key": "mako"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Droid DNA",
      "init": "init.debug_mfgkernel.rc",
      "lunch": "cm_dlx-userdebug",
      "legacy_versions": [
        "6.0.1.5",
        "6.0.1.9",
        "6.0.2.3",
        "6.0.2.7",
        "6.0.2.8",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "dlx"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (HSPA+)",
      "init": "init.smdk4x12.rc",
      "lunch": "cm_n7100-userdebug",
      "legacy_versions": [
        "6.0.1.9",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "n7100"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Acer A700",
      "init": "init.picasso_mf.rc",
      "lunch": "cm_a700-userdebug",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "touch_version": "6.0.3.1",
      "key": "a700"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "Google Nexus 7 (GSM)",
      "init": "init.tilapia.rc",
      "lunch": "cm_tilapia-userdebug",
      "legacy_versions": [
        "6.0.2.3"
      ],
      "touch_version": "6.0.3.1",
      "key": "tilapia"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (LTE)",
      "init": "init.t0lte.rc",
      "lunch": "cm_t0lte-userdebug",
      "legacy_versions": [
        "6.0.2.3",
        "6.0.2.4",
        "6.0.2.5",
        "6.0.2.8",
        "6.0.3.0",
        "6.0.3.1"
      ],
      "touch_version": "6.0.3.2",
      "key": "t0lte"
    },
    {
      "version": "6.0.2.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 ; ",
      "name": "LG Optimus 3DMax",
      "lunch": "cm_p720-userdebug",
      "inits": [
        "init.lgep720board.rc",
        "/bootimages/battery_charging_01.rle"
      ],
      "legacy_versions": [

      ],
      "reboot_recovery": "echo '518 R 1' > /sys/kernel/kobject_lge_nvdata/dynamic_nvdata_raw_write ; reboot ; ",
      "touch_version": "6.0.2.3",
      "key": "p720"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Samsung Galaxy S3 (Cricket)",
      "init": "init.d2cri.rc",
      "lunch": "cm_d2cri-userdebug",
      "legacy_versions": [
        "6.0.2.7",
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "d2cri"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC Sensation XL",
      "init": "init.runnymede.rc",
      "lunch": "cm_runnymede-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.2.7",
      "key": "runnymede"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p18 bs=4096 ; ",
      "name": "Pantech Presto",
      "init": "init.presto.rc",
      "lunch": "cm_presto-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.2.7",
      "key": "presto"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p13 bs=4096 ; ",
      "name": "ZTE Sequent",
      "init": "init.warp2.rc",
      "lunch": "cm_warp2-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.2.7",
      "key": "warp2"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/omap/omap_hsmmc.0/by-name/recovery bs=4096 ; ",
      "name": "Google Nexus Q",
      "init": "init.steelhead.rc",
      "lunch": "cm_steelhead-userdebug",
      "legacy_versions": [
        "6.0.2.7"
      ],
      "key": "steelhead"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p15 bs=4096 ; ",
      "name": "Samsung Prevail 2 (Boost Mobile)",
      "lunch": "cm_prevail2spr-userdebug",
      "inits": [
        "init.carrier.rc",
        "init.prevail2spr.rc"
      ],
      "legacy_versions": [

      ],
      "touch_version": "6.0.2.7",
      "key": "prevail2spr"
    },
    {
      "version": "6.0.2.7",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S3 Mini",
      "init": "init.golden.rc",
      "lunch": "cm_golden-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.2.7",
      "key": "golden"
    },
    {
      "version": "6.0.3.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC Droid Incredible 4G LTE",
      "init": "init.fireball.rc",
      "lunch": "cm_fireball-userdebug",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.2.9",
        "6.0.3.1"
      ],
      "touch_version": "6.0.3.3",
      "key": "fireball"
    },
    {
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p23 bs=4096 ; ",
      "name": "HTC Jetstream",
      "init": "init.puccinilte.rc",
      "lunch": "cm_puccinilte-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.2.8",
      "key": "puccinilte"
    },
    {
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L7",
      "init": "init.u0.rc",
      "lunch": "cm_p700-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.2.8",
      "key": "p700"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One",
      "init": "init.m7.rc",
      "lunch": "cm_m7-userdebug",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "m7"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxu)",
      "init": "init.dlxu.rc",
      "lunch": "cm_dlxu-userdebug",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "dlxu"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly (dlxub1)",
      "init": "init.dlxub1.rc",
      "lunch": "cm_dlxub1-userdebug",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "dlxub1"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p20 bs=4096 ; ",
      "name": "HTC Butterfly J",
      "init": "init.dlxj.rc",
      "lunch": "cm_dlxj-userdebug",
      "legacy_versions": [
        "6.0.2.8",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "dlxj"
    },
    {
      "version": "6.0.2.8",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "LG Optimus L5",
      "init": "init.m4.rc",
      "lunch": "cm_e610-userdebug",
      "legacy_versions": [

      ],
      "key": "e610"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "HTC One X (AT&T)",
      "init": "init.evita.rc",
      "lunch": "cm_evita-userdebug",
      "legacy_versions": [
        "6.0.2.8"
      ],
      "touch_version": "6.0.3.1",
      "key": "evita"
    },
    {
      "version": "6.0.3.1",
      "ro.product.devices": [
        "p4",
        "GT-P7500",
        "p7500"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1",
      "init": "init.p4.rc",
      "lunch": "cm_p4-userdebug",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "p4"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (T-Mobile)",
      "init": "init.p4tmo.rc",
      "lunch": "cm_p4tmo-userdebug",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "p4tmo"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1 (Verizon)",
      "init": "init.p4vzw.rc",
      "lunch": "cm_p4vzw-userdebug",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "p4vzw"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p4 bs=4096 ; ",
      "name": "LG Optimus L9",
      "init": "init.u0.rc",
      "lunch": "cm_p760-userdebug",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "touch_version": "6.0.3.1",
      "key": "p760"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy S3 LTE (GT-I9305)",
      "init": "ueventd.smdk4x12.rc",
      "lunch": "cm_i9305-userdebug",
      "legacy_versions": [
        "6.0.2.9",
        "6.0.3.1"
      ],
      "touch_version": "6.0.3.2",
      "key": "i9305"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-num/p2 bs=4096 ; ",
      "name": "Samsung Galaxy Tab 10.1v",
      "init": "init.p3.rc",
      "lunch": "cm_p3-userdebug",
      "legacy_versions": [
        "6.0.2.9"
      ],
      "touch_version": "6.0.3.1",
      "key": "p3"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Note 10.1",
      "init": "init.n8013.rc",
      "lunch": "cm_n8013-userdebug",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "n8013"
    },
    {
      "version": "6.0.3.0",
      "ro.product.devices": [
        "i605",
        "t0ltevzw"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Verizon)",
      "init": "init.i605.rc",
      "lunch": "cm_i605-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.0",
      "key": "i605"
    },
    {
      "version": "6.0.3.1",
      "ro.product.devices": [
        "l900",
        "t0ltespr"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (Sprint)",
      "init": "init.l900.rc",
      "lunch": "cm_l900-userdebug",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "l900"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (AT&T)",
      "init": "init.t0lteatt.rc",
      "lunch": "cm_t0lteatt-userdebug",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "t0lteatt"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p9 bs=4096 ; ",
      "name": "Samsung Galaxy Note 2 (T-Mobile)",
      "init": "init.t0ltetmo.rc",
      "lunch": "cm_t0ltetmo-userdebug",
      "legacy_versions": [
        "6.0.3.0"
      ],
      "touch_version": "6.0.3.1",
      "key": "t0ltetmo"
    },
    {
      "version": "6.0.3.0",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "LG Optimus G Intl (E975)",
      "init": "init.geehrc.rc",
      "lunch": "cm_e975-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.0",
      "key": "e975"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/SOS bs=4096 ; ",
      "name": "LG Optimus 4X HD",
      "init": "init.x3.rc",
      "lunch": "cm_p880-userdebug",
      "legacy_versions": [

      ],
      "reboot_recovery": "echo 'boot-recovery' | dd of=/dev/block/mmcblk0p5 bs=1 count=13 ; reboot ; ",
      "touch_version": "6.0.3.1",
      "key": "p880"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p22 bs=4096 ; ",
      "name": "Samsung Galaxy Note (T-Mobile)",
      "init": "init.quincytmo.rc",
      "lunch": "cm_quincytmo-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.1",
      "key": "quincytmo"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p6 bs=4096 ; ",
      "name": "Samsung Galaxy Note 10.1 (GSM)",
      "init": "init.n8000.rc",
      "lunch": "cm_n8000-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.1",
      "key": "n8000"
    },
    {
      "version": "6.0.3.1",
      "flash_recovery": "dd if=%s of=/dev/block/platform/msm_sdcc.1/by-name/recovery bs=4096 ; ",
      "name": "Oppo Find5",
      "init": "init.find5.rc",
      "lunch": "cm_find5-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.1",
      "key": "find5"
    },
    {
      "version": "6.0.3.2",
      "ro.product.devices": [
        "jfltetmo",
        "jflteMetroPCS"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (T-Mobile)",
      "init": "init.jfltetmo.rc",
      "lunch": "cm_jfltetmo-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.2",
      "key": "jfltetmo"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (Canada/Bell)",
      "init": "init.jfltecan.rc",
      "lunch": "cm_jfltecan-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.2",
      "key": "jfltecan"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p17 bs=4096 ; ",
      "name": "ZTE Engage",
      "init": "init.zte.rc",
      "lunch": "cm_V8000-userdebug",
      "legacy_versions": [

      ],
      "key": "V8000"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p10 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (i9500)",
      "init": "init.i9500.rc",
      "lunch": "cm_i9500-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.2",
      "key": "i9500"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/platform/sdhci-tegra.3/by-name/recovery bs=4096 ; ",
      "name": "Motorola Xoom (GSM)",
      "init": "init.everest.rc",
      "lunch": "cm_everest-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.2",
      "key": "everest"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "HTC Desire X",
      "init": "init.protou.rc",
      "lunch": "cm_protou-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.2",
      "key": "protou"
    },
    {
      "version": "6.0.3.2",
      "ro.product.devices": [
        "m7spr",
        "m7wls"
      ],
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p36 bs=4096 ; ",
      "name": "HTC One (Sprint)",
      "init": "init.m7spr.rc",
      "lunch": "cm_m7spr-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.3",
      "key": "m7spr"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One (T-Mobile)",
      "init": "init.m7tmo.rc",
      "lunch": "cm_m7tmo-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.3",
      "key": "m7tmo"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One (AT&T)",
      "init": "init.m7att.rc",
      "lunch": "cm_m7att-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.3",
      "key": "m7att"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "name": "Samsung Galaxy S4 (AT&T)",
      "init": "init.jflteatt.rc",
      "lunch": "cm_jflteatt-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.2",
      "key": "jflteatt"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p34 bs=4096 ; ",
      "name": "HTC One (non-US GSM)",
      "init": "init.m7ul.rc",
      "lunch": "cm_m7ul-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.3",
      "key": "m7ul"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=/dev/block/platform/msm_sdcc.1/by-name/aboot of=/sdcard/clockworkmod/aboot.img; /data/data/com.koushikdutta.rommanager/files/loki_patch recovery /sdcard/clockworkmod/aboot.img %s /sdcard/clockworkmod/recovery.lok ; /data/data/com.koushikdutta.rommanager/files/loki_flash recovery /sdcard/clockworkmod/recovery.lok ; ",
      "name": "Samsung Galaxy S4 (Verizon)",
      "init": "init.jfltevzw.rc",
      "lunch": "cm_jfltevzw-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.2",
      "key": "jfltevzw"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (Sprint)",
      "init": "init.jfltespr.rc",
      "lunch": "cm_jfltespr-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.2",
      "key": "jfltespr"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (US Cellular)",
      "init": "init.jflteusc.rc",
      "lunch": "cm_jflteusc-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.2",
      "key": "jflteusc"
    },
    {
      "version": "6.0.3.3",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (i9505)",
      "init": "init.jfltexx.rc",
      "lunch": "cm_jfltexx-userdebug",
      "legacy_versions": [
        "6.0.3.2"
      ],
      "touch_version": "6.0.3.3",
      "key": "jfltexx"
    },
    {
      "version": "6.0.3.2",
      "flash_recovery": "dd if=%s of=/dev/block/mmcblk0p21 bs=4096 ; ",
      "name": "Samsung Galaxy S4 (Cricket)",
      "init": "init.jfltecri.rc",
      "lunch": "cm_jfltecri-userdebug",
      "legacy_versions": [

      ],
      "touch_version": "6.0.3.2",
      "key": "jfltecri"
    },
    {
      "version": "6.0.3.3",
      "flash_recovery": "dd if=%s of=/dev/block/mtdblock2 bs=4096 ; ",
      "name": "LG Optimus Q (LGL55C Tracfone)",
      "init": "init.gelato.rc",
      "lunch": "cm_lgl55c-userdebug",
      "legacy_versions": [

      ],
      "key": "lgl55c"
    }
  ],
  "use_in_app": false
}