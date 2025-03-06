import{R as t}from"./rom-B2LvkjpK.js";class i extends t{constructor(){super(...arguments),this.CHIP_NAME="ESP32-C6",this.IMAGE_CHIP_ID=13,this.EFUSE_BASE=1611335680,this.MAC_EFUSE_REG=this.EFUSE_BASE+68,this.UART_CLKDIV_REG=1072955412,this.UART_CLKDIV_MASK=1048575,this.UART_DATE_REG_ADDR=1610612860,this.FLASH_WRITE_SIZE=1024,this.BOOTLOADER_FLASH_OFFSET=0,this.FLASH_SIZES={"1MB":0,"2MB":16,"4MB":32,"8MB":48,"16MB":64},this.SPI_REG_BASE=1610620928,this.SPI_USR_OFFS=24,this.SPI_USR1_OFFS=28,this.SPI_USR2_OFFS=32,this.SPI_MOSI_DLEN_OFFS=36,this.SPI_MISO_DLEN_OFFS=40,this.SPI_W0_OFFS=88}async getPkgVersion(t){const i=this.EFUSE_BASE+68+12;return await t.readReg(i)>>21&7}async getChipRevision(t){const i=this.EFUSE_BASE+68+12;return(await t.readReg(i)&7<<18)>>18}async getChipDescription(t){let i;i=0===await this.getPkgVersion(t)?"ESP32-C6":"unknown ESP32-C6";return i+=" (revision "+await this.getChipRevision(t)+")",i}async getChipFeatures(t){return["Wi-Fi 6","BT 5","IEEE802.15.4"]}async getCrystalFreq(t){return 40}_d2h(t){const i=(+t).toString(16);return 1===i.length?"0"+i:i}async readMac(t){let i=await t.readReg(this.MAC_EFUSE_REG);i>>>=0;let s=await t.readReg(this.MAC_EFUSE_REG+4);s=s>>>0&65535;const _=new Uint8Array(6);return _[0]=s>>8&255,_[1]=255&s,_[2]=i>>24&255,_[3]=i>>16&255,_[4]=i>>8&255,_[5]=255&i,this._d2h(_[0])+":"+this._d2h(_[1])+":"+this._d2h(_[2])+":"+this._d2h(_[3])+":"+this._d2h(_[4])+":"+this._d2h(_[5])}getEraseSize(t,i){return i}}export{i as ESP32C6ROM};
