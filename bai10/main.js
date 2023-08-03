// class Mobile {
//     constructor() {
//         this.pin = 60
//         this.typingMess = ""
//         this.inbox = []
//         this.outbox = []
//         this.statas = true
//     }

//     onoffMobile(value) {
//         this.statas = value
//     }
//     sacPin() {
//         if (this.pin == 100) {
//             console.log(`pin day`);
//         } else {
//             pin++;
//         }
//     }
//     soanTinNhan(value) {
//         if (this.statas) {
//             this.typingMess = value
//             this.pin--
//         } else {
//             console.log(`Mays chuwa dduowcj baat`);
//         }
//     }
//     guiTinNhan(dt) {
//         if (this.statas) {
//             this.inbox.push(this.typingMess)
//             this.typingMess = ""
//             dt.inbox.push(this.typingMess)
//             this.pin--
//         } else {
//             console.log(`Mays chuwa dduowcj baat`);
//         }
//     }
//     nhanTinNhan(value) {
//         if (this.statas) {
//             this.inbox.push(value)
//             this.pin--
//         } else {
//             console.log(`Mays chuwa dduowcj baat`);
//         }
//     }
//     xemTinNhan() {
//         if (this.statas) {
//             console.log(this.inbox);
//             this.pin--
//         } else {
//             console.log(`Mays chuwa dduowcj baat`)
//         }
//     }
//     xemTinOutBox() {
//         if (this.statas) {
//             console.log(this.outbox);
//             this.pin--
//         } else {
//             console.log(`Mays chuwa dduowcj baat`)
//         }

//     }

// }

// let nokia = new Mobile()
// let Iphone = new Mobile()
// nokia.soanTinNhan(`bdhdhdh`)
// nokia.guiTinNhan(Iphone)
// Iphone.xemTinNhan()

// Viết một lớp các đối tượng điện thoại lấy tên là Mobile, mỗi một chiếc mobile phone khi được tạo ra sẽ mang những đặc điểm sau:
// class Mobile {
//     pin
//     dangSoanThao = ""
//     hopThuDen = []
//     tinNhanDaGui = []
//     status = true
//     constructor(pin) {
//         if (pin < 1 || pin > 100) {
//             this.pin = 80
//         } else {
//             this.pin = pin
//         }
//         this.CheckOnOff = () => {
//             if (!this.status) {
//                 return
//             }
//             this.pin--
//             return this.status
//         }
//         this.setOnOff = (value) => {
//             if (!this.status) {
//                 return
//             }
//             this.status = value
//             this.pin--;
//         }
//         this.sacPin = () => {
//             console.log(`dang sac pin`);
//             this.pin++
//         }
//         this.soanTinNhan = (value) => {
//             if (!this.status) {
//                 return
//             }
//             this.dangSoanThao = value
//             this.pin--
//         }
//         this.nhanTinNhan = (value) => {
//             if (!this.status) {
//                 return
//             }
//             this.hopThuDen.push(value)
//             this.pin--
//         }
//         this.guiTinNhan = (phone) => {
//             if (!this.status) {
//                 return
//             }
//             this.tinNhanDaGui.push(this.dangSoanThao)
//             phone.nhanTinNhan(this.dangSoanThao)
//             this.dangSoanThao = ""
//             this.pin--
//         }
//         this.xemTinTrongHopThuDen = () => {
//             if (!this.status) {
//                 return
//             }
//             this.pin--
//             return this.hopThuDen


//         }
//         this.xemTinDaGui = () => {
//             if (!this.status) {
//                 return
//             }
//             this.pin--
//             return this.tinNhanDaGui
//         }

//     }

// }
// let nokia = new Mobile(23)
// let Iphone = new Mobile(45)
// nokia.soanTinNhan = (`noi dung bat ki`)
// nokia.guiTinNhan(Iphone)
// console.log(Iphone.xemTinTrongHopThuDen());
// class Mobile {
//     pin
//     tinNhanDangSoanThao = ""
//     hopThuDen = []
//     hopThuGui = []
//     status = true
//     constructor(pin) {
//         if (pin < 1 || pin > 100) {
//             this.pin = 80
//         } else {
//             this.pin = pin
//         }
//         this.checkOnOff = () => {
//             if (!this.status) {
//                 return
//             }
//             this.pin--
//             return this.status
//         }
//         this.setOnOff = (value) => {
//             if (!this.status) {
//                 return
//             }
//             this.status = value
//             this.pin--
//         }
//         this.sacPin = () => {
//             if (!this.status) {
//                 return
//             }
//             console.log(`dang sac pin`);
//             this.pin++
//         }
//         this.soanTinNhan = (value) => {
//             if (!this.status) {
//                 return
//             }
//             this.soanTinNhan = value
//             this.pin--
//         }
//         this.nhanTinNhan = (value) => {
//             if (!this.status) {
//                 return
//             }
//             this.hopThuDen.push(value)
//             this.pin--
//         }
//         this.guiTinNhan = (phone) => {
//             if (!this.status) {
//                 return
//             }
//             this.hopThuGui.push(this.tinNhanDangSoanThao)
//             phone.nhanTinNhan(this.tinNhanDangSoanThao)
//             this.tinNhanDangSoanThao = ""
//             this.pin--
//         }
//         this.xemTinNhanTrongHopThuDen = () => {
//             if (!this.status) {
//                 return
//             }
//             this.pin--
//             return this.hopThuDen
//         }
//         this.xemTinDaGui = () => {
//             if (!this.status) {
//                 return
//             }
//             this.pin--
//             return this.hopThuGui
//         }
//     }
// }

// let nokia = new Mobile(22)
// let iphone = new Mobile(45)

// nokia.soanTinNhan("noi dung bat ki")
// nokia.guiTinNhan(iphone)
// console.log(iphone.xemTinNhanTrongHopThuDen());
// Viết một lớp các đối tượng điện thoại lấy tên là Mobile, mỗi một chiếc mobile phone khi được tạo ra sẽ mang những đặc điểm sau:
// class Mobile {
//     // Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv).
//     pin;
//     // Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
//     tinnhandangsoan = "";
//     // Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
//     tinnhantronghopthuden = [];
//     // Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
//     tinnhandagui = [];
//     trangthai = true;

//     constructor(pin) {
//         if (this.pin <= 100 && this.pin > 0) {  // (tối đa 100 đv).
//             pin;
//             this.pin = pin;
//         } else {
//             this.pin = 80;
//         }
//         // Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
//         this.kiemTraBatTat = () => {
//             if (!this.trangthai) {
//                 return;
//             }
//             this.pin--;
//             return this.trangthai;
//         }

//         // Có chức năng bật và tắt điện thoại.
//         this.batTatDienThoai = (value) => {
//             if (!this.trangthai) {
//                 return;
//             }
//             this.trangthai = value;
//             this.pin--;
//         }

//         // Có chức năng xạc pin điện thoại.
//         this.xacpindienthoai = () => {
//             if (this.pin == 100) {
//                 return this.pin;
//             }
//             this.pin++;
//         }

//         // Có chức năng soạn tin nhắn.
//         this.soantinnhan = (value) => {
//             if (!this.trangthai) {
//                 return;
//             }
//             this.tinnhandangsoan = value;
//             this.pin--;
//         }

//         // Có chức năng nhận tin nhắn từ một chiếc mobile khác.
//         this.nhantinnhan = (value) => {
//             if (!this.trangthai) {
//                 return;
//             }
//             this.tinnhantronghopthuden.push(value);
//             this.pin--;
//         }

//         // Có chức năng gửi tin nhắn tới một chiếc mobile khác.
//         this.guitinnhan = (value, phone) => {
//             if (!this.trangthai) {
//                 return;
//             }
//             this.tinnhandagui.push(value);
//             phone.tinnhantronghopthuden.push(value);
//             this.pin--;
//         }

//         // Có chức năng xem tin trong hộp thư đến.
//         this.xemtin = () => {
//             if (!this.trangthai) {
//                 return;
//             }
//             this.pin--;
//             return this.tinnhantronghopthuden;

//         }

//         // Có chức năng xem tin đã gửi.
//         this.xemtindagui = () => {
//             if (!this.trangthai) {
//                 return;
//             }
//             this.pin--;
//             return this.tinnhantronghopthuden;
//         }
//         // Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị. : pin--
//         // Các chức năng không thể hoạt động nếu điện thoại chưa bật. : check trang thai = true =>>>> if...return
//     }
// }

// // Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:
// // Có một chiếc điện thoại nokia và một chiếc iphone
// let nokia = new Mobile(45)
// let iphone = new Mobile(45)

// // Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ
// nokia.soantinnhan("nhanh con ve");

// // và gửi cho chiếc iphone
// nokia.guitinnhan(nokia.tinnhandangsoan, iphone);

// // Chiếc iphone kiểm tra inbox
// let ketqua = iphone.xemtindagui(); //ketqua =  []

// // và hiển thị tin đó.
// console.log(ketqua);






// // Viết một lớp các đối tượng điện thoại lấy tên là Mobile, mỗi một chiếc mobile phone khi được tạo ra sẽ mang những đặc điểm sau:
// class Mobile {

//     pin // Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv).
//     tinNhanDangSoan = "" // Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
//     hopThuDen = [] // Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
//     hopThuGui = [] // Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
//     status = true

//     // Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị. this.pin--;

//     // Các chức năng không thể hoạt động nếu điện thoại chưa bật.
//     // if (!this.status) {
//     // return
//     // }
//     constructor(pin) {
//         // Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv).
//         if (pin < 1 || pin > 100) {
//             this.pin = 80
//         } else {
//             this.pin = pin
//         }

//         // Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
//         this.checkOnOff = () => {
//             if (!this.status) {
//                 return
//             }
//             this.pin--;
//             return this.status;
//         }

//         // Có chức năng bật và tắt điện thoại.
//         this.setOnOff = (value) => {
//             if (!this.status) {
//                 return
//             }
//             this.status = value
//             this.pin--;
//         }

//         // Có chức năng xạc pin điện thoại.
//         this.sacPin = () => {
//             console.log("Dang sac pin");
//             this.pin++;
//         }

//         // Có chức năng soạn tin nhắn.
//         this.soanTinNhan = (value) => {
//             if (!this.status) {
//                 return
//             }
//             this.tinNhanDangSoan = value
//             this.pin--;
//         }

//         // Có chức năng nhận tin nhắn từ một chiếc mobile khác.
//         this.nhanTinNhan = (value) => {
//             if (!this.status) {
//                 return
//             }
//             this.hopThuDen.push(value)
//             this.pin--;
//         }

//         // Có chức năng gửi tin nhắn tới một chiếc mobile khác.
//         this.guiTinNhan = (phone) => {
//             if (!this.status) {
//                 return
//             }
//             this.hopThuGui.push(this.tinNhanDangSoan) // nokia.hopguidi....
//             phone.nhanTinNhan(this.tinNhanDangSoan) // phone.hopThuDen.push(value)
//             this.tinNhanDangSoan = ""
//             this.pin--;
//         }

//         // Có chức năng xem tin trong hộp thư đến.
//         this.xemTinNhanTrongHopThuDen = () => {
//             if (!this.status) {
//                 return
//             }
//             this.pin--;
//             return this.hopThuDen
//         }

//         // Có chức năng xem tin đã gửi.
//         this.xemTinNhanDaGui = () => {
//             if (!this.status) {
//                 return
//             }
//             this.pin--;
//             return this.hopThuGui
//         }
//     }

// }

// // Khởi tạo các đối tượng điện thoại và thực hiện kịch bản sau:
// // Có một chiếc điện thoại nokia và một chiếc iphone
// let nokia = new Mobile(23)
// let iphone = new Mobile(45)


// // Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ và gửi cho chiếc iphone Chiếc iphone kiểm tra inbox và hiển thị tin đó.

// nokia.soanTinNhan("onoi dung bat ky")
// nokia.guiTinNhan(iphone)


// console.log(iphone.xemTinNhanTrongHopThuDen());



// class Mobile {
//     pin;
//     tinNhanDangSoanThao = "";
//     hopThuDen = []
//     tinNhanDaGui = []
//     trangThai = true

//     constructor(pin) {
//         if (pin < 1 && pin > 100) {
//             this.pin = 50
//         } else {
//             this.pin = pin
//         }
//         this.checkOnOff = () => {
//             if (!this.trangThai) {
//                 return
//             }
//             this.pin--
//             return this.trangThai
//         }
//         this.setOnOff = (value) => {
//             if (!this.trangThai) {
//                 return
//             }

//             this.pin--
//             this.trangThai = value
//         }
//         this.xacPin = () => {
//             if (!this.trangThai) {
//                 return
//             }
//             console.log(`dang sac pin`);
//             this.pin++
//         }
//         this.soanTinNhan = (value) => {
//             if (!this.trangThai) {
//                 return
//             }
//             this.pin--
//             this.tinNhanDangSoanThao = value

//         }
//         this.nhanTinNhan = (value) => {
//             if (!this.trangThai) {
//                 return
//             }
//             this.hopThuDen.push(value)
//             this.pin--
//         }
//         this.guiTinNhan = (value, phone) => {
//             if (!this.trangThai) {
//                 return
//             }
//             this.tinNhanDaGui.push(value)
//             phone.hopThuDen.push(value)
//             this.pin--
//         }
//         this.xemTinNhanHopThuDen = () => {
//             if (!this.trangThai) {
//                 return
//             }
//             this.pin--
//             return
//         }
//         this.xemTinDaGui = () => {
//             if (!this.trangThai) {
//                 return
//             }
//             this.pin--
//             return
//         }

//     }

// }

// // let nokia = new Mobile(20)
// // let iphone = new Mobile(40)
// // nokia.soanTinNhan(`hoc mmuonn qua`)
// // nokia.guiTinNhan(iphone)
// // console.log(iphone.xemTinNhanHopThuDen());

// let nokia = new Mobile(45)
// let iphone = new Mobile(45)

// // Chiếc điện thoại nokia soạn tin nhắn với nội dung bất kỳ
// nokia.soanTinNhan("nhanh con ve");

// // và gửi cho chiếc iphone
// nokia.guiTinNhan(nokia.tinNhanDangSoanThao, iphone);

// // Chiếc iphone kiểm tra inbox
// let ketqua = iphone.xemTinDaGui(); //ketqua =  []

// // và hiển thị tin đó.
// console.log(ketqua)


class Mobile {
    pin
    tinNhanDangSoanThao = ""
    hopThuDen = []
    tinNhanDaGui = []
    trangthai = true
    constructor(pin) {
        if (pin < 0 && pin > 100) {
            this.pin = 60
        } else {
            this.pin = pin
        }
        this.checkOnOf = () => {
            if (!this.trangthai) {
                return
            }
            this.pin--
            return
        }
        this.setOnOf = (value) => {
            if (!this.trangthai) {
                return
            }
            this.trangthai = value
            this.pin--
        }
        this.xacPin = () => {
            if (!this.trangthai) {
                return
            }
            console.log(`dang xac pin`);
            this.pin++
        }
        this.soanTinNhan = (value) => {
            if (!this.trangthai) {
                return
            }
            this.pin--
            this.tinNhanDangSoanThao = value
        }
        this.nhanTinNhan = (value) => {
            if (!this.trangthai) {
                return
            }
            this.hopThuDen.push(value)
            this.pin--
        }
        this.guiTinNhan = (value, phone) => {
            if (!this.trangthai) {
                return
            }
            this.tinNhanDaGui.push(value)
            phone.hopThuDen = value
            this.pin--
        }
        this.hopThuDen = () => {
            if (!this.trangthai) {
                return
            }
            this.pin--
            return
        }
        this.xemTinNhan = () => {
            if (!this.trangthai) {
                return
            }
            this.pin--
            return
        }
    }
}


let nokia = new Mobile(20)
let iphone = new Mobile(30)
nokia.soanTinNhan("di ngu gthdj")
nokia.guiTinNhan(nokia.tinNhanDangSoanThao, iphone)
console.log(iphone.hopThuDen);