const QRCode = require('easyqrcodejs-nodejs');

var options = {
    // ====== Basic
    text: "https://bxr.app.link/64k2xMeI0cb",
    width: 1024,
    height: 1024,
    colorDark : "#E0403C",
    colorLight : "#FFFFFF",
    correctLevel : QRCode.CorrectLevel.H, // L, M, Q, H
    dotScale: 0.6, // Must be greater than 0, less than or equal to 1. default is 1
    
    // ====== Quiet Zone
    quietZone: 40,
    quietZoneColor: '#FFFFFF',
    
    
    // ====== Logo
    
    // logo:"../demo/logo.png", // Relative address, relative to `easy.qrcode.min.js`
    logo:"./QrLogo.png", 
    logoWidth:300, // width. default is automatic width
    logoHeight:300 ,// height. default is automatic height
    logoBackgroundColor:'#FFFFFF', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
    logoBackgroundTransparent:true, // Whether use transparent image, default is false
    

    // ====== Backgroud Image
    
    // backgroundImage: './white.png', // Background Image
    // backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1. 
    // autoColor: false,
    
    
    // ====== Colorful
    // === Posotion Pattern(Eye) Color
    
    // PO: '', // Global Posotion Outer color. if not set, the defaut is `colorDark`
    // PI: '#962689', // Global Posotion Inner color. if not set, the defaut is `colorDark`
    PO_TL:'#DE4148', // Posotion Outer color - Top Left 
    PI_TL:'#DC4443', // Posotion Inner color - Top Left 
    PO_TR:'#DE4148', // Posotion Outer color - Top Right 
    PI_TR:'#DC4443', // Posotion Inner color - Top Right 
    PO_BL:'#922598', // Posotion Outer color - Bottom Left 
    PI_BL:'#92268F', // Posotion Inner color - Bottom Left 
    
    // === Alignment Color
    
    AO: '#FFFFFF', // Alignment Outer. if not set, the defaut is `colorDark`
    AI: '#FFFFFF', // Alignment Inner. if not set, the defaut is `colorDark`
    
    // === Timing Pattern Color
    
    // timing: '#962689', // Global Timing color. if not set, the defaut is `colorDark`
    timing_H: '#FFFFFF', // Horizontal timing color
    timing_V: '#FFFFFF', // Vertical timing color
    
    
    // ====== Title
    /*
    title: 'Welcome to BXR', // content 
    titleFont: "bold 18px Arial", //font. default is "bold 16px Arial"
    titleColor: "#004284", // color. default is "#000"
    titleBackgroundColor: "#fff", // background color. default is "#fff"
    titleHeight: 70, // height, including subTitle. default is 0
    titleTop: 25, // draws y coordinates. default is 30
    */

    // ====== SubTitle
    /*
    subTitle: 'QR subTitle', // content
    subTitleFont: "14px Arial", // font. default is "14px Arial"
    subTitleColor: "#004284", // color. default is "4F4F4F"
    subTitleTop: 40, // draws y coordinates. default is 0
    */

    // ===== Event Handler
    /*
    onRenderingStart: undefined,
    */

    // ==== Images format
    /*
    format: 'JPG', // 'PNG', 'JPG'
    compressionLevel: 6, // ZLIB compression level (0-9). default is 6
    quality: 1, // An object specifying the quality (0 to 1). default is 0.75. (JPGs only) 
    */

    // ==== Versions
    
    version: 0, // The symbol versions of QR Code range from Version 1 to Version 40. default 0 means automatically choose the closest version based on the text length.
        

    // ===== Binary(hex) data mode
    /*
    binary: false // Whether it is binary mode, default is text mode. 
    */ 
}



var qrcode = new QRCode(options);
console.log|("Saving qr code")
qrcode.saveImage({
    path: 'qrTest2.png' // file path
}).then(data=>{
   console.log("`q-premium1.png` has been Created!");
});