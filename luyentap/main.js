// bai1 let products = [{ id: 1, name: "Milk", count: 100 },
// { id: 2, name: "Yakult", count: 100 }, { id: 3, name: "Butter", count: 100, }];
// Copy
// Thêm đối tượng có các thuộc tính tương tự các đối tượng có trong mảng “products”

// Xóa đối tượng có id là 2

// Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0

// Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không ?
//     Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”


// let products = [
//     { id: 1, name: "Milk", count: 100 },
//     { id: 2, name: "Yakult", count: 100 },
//     { id: 3, name: "Butter", count: 100, }
// ];
// let newProducts = { id: 4, name: "kdjj", count: 200, }
// products.push(newProducts)
// console.log(products);
// //xoa doi tuong
// let number = prompt(`nhap doi tuong muon xoa`)
// products.splice(number - 1, 1)
// for (let i = 0; i < products.length; i++) {
//     if (products[i].id == 3) {
//         products[i].count = 0;
//     }
// }
// let n = prompt(`nhap tu khoa`)
// let flag = false
// for (let i = 0; i < products.length; i++) {
//     if (products[i].name == n) {
//         console.log(products[i]);
//         flag = true
//     }
// }
// if (!flag) {
//     console.log(`khong tim thay du lieu`);
// }



// Bài 2: Tạo một class Dog có những thuộc tính:

// Tên và tốc độ di chuyển

// Có khả năng thực hiện sủa

// Có khả năng bắt được mèo nếu tốc độ của chó lớn hơn

// Tạo class Cat có những thuộc tính sau:

// Tên và tốc dộ di chuyển


// class Dog {
//     constructor(tenDog, tocDoDiChuyen) {
//         this.tenDog = tenDog
//         this.tocDoDiChuyen = tocDoDiChuyen
//         this.hanhDongSua = () => {
//             console.log(`gau gau`);
//         }
//         this.batMeo = (value) => {
//             if (this.tocDoDiChuyen > value.tocDoDiChuyenCat) {
//                 console.log(`bat duoc meo`);
//             } else {
//                 console.log(`khong bat duoc`);
//             }
//         }
//     }
// }
// class Cat {
//     constructor(tenCat, tocDoDiChuyenCat) {
//         this.tenCat = tenCat
//         this.tocDoDiChuyenCat = tocDoDiChuyenCat
//     }
// }
// let cho = new Dog("cho", 60)
// let meo = new Cat("meo", 20)
// cho.batMeo(meo)


// class User {
//     constructor(id, ten, email, diaChi, phone) {
//         this.id = id
//         this.ten = ten
//         this.email = email
//         this.diaChi = diaChi
//         this.phone = phone
//         this.role = 0
//     }
// }
// class Admin extends User {
//     constructor(id, ten, email, diaChi, phone) {
//         super(id, ten, email, diaChi, phone)
//         this.role = 1

//     }
// }
// let arr = []
// let a = new User(1, "nguyen Van A", "a@gmail.com", "Ha Noi", "737634673")
// let b = new User(2, "nguyen Van B", "b@gmail.com", "Ha Noi1", "7374443634")
// let c = new User(3, "nguyen Van C", "c@gmail.com", "Ha Noi2", "7347633373")
// let d = new Admin(4, "nguyen Van D", "d@gmail.com", "Ha Noi3", "5547633373")
// let e = new Admin(5, "nguyen Van E", "e@gmail.com", "Ha Noi4", "557633373")
// arr.push(a, b, c, d, e)
// let mangMoi = [...arr]
// console.log(mangMoi);
// // Xóa người dùng thông qua tên của họ(không xóa được admin)

// let tenCanXoa = prompt("Nhap ten can xoa")
// let tim = false
// for (i = 0; i < arr.length; i++) {
//     if (arr[i].ten == tenCanXoa && arr[i].role != 1) {
//         tim = true
//         arr.splice(i, 1)
//     }
// }
// if (!tim) {
//     console.log("ko tim dc/ ko xoa dc");
// }
// console.log(arr);
// let n = +prompt(`nhap id can sua`)
// // Sửa thông tin người dùng thông qua id(không sửa được thông tin admin
// for (i = 0; i < arr.length; i++) {
//     if (arr[i].id == n && arr[i].role != 1) {
//         arr[i].ten = prompt('Nhap ten moi')
//         arr[i].email = prompt('Nhap gmail moi')
//         arr[i].diaChi = prompt('Nhap dia chi moi')
//         arr[i].phone = prompt('Nhap phon moi')
//     }
// }

// // Thêm 1 nick admin vào mảng danh sách người dùng.
// // Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra
// for (i = 0; i < arr.length; i++) {
//     if (arr[i].role == 1) {
//         console.log(arr[i]);
//     }
// }
// let idTuTang = 1;
// class KhoaHoc {
//     id = idTuTang++
//     hoanthanh = false
//     constructor(ten) {
//         this.ten = ten
//     }
// }
// let dulieu1 = new KhoaHoc("HTML")
// let dulieu2 = new KhoaHoc("Basic of javascrip")
// let dulieu3 = new KhoaHoc("Node package Manager (npm)")
// let dulieu4 = new KhoaHoc("Git")
// // console.log(dulieu1, dulieu2, dulieu3, dulieu4);


// let mangKhoaHoc = [dulieu1, dulieu2, dulieu3, dulieu4]
// let giaTriNhap;
// while (true) {
//     giaTriNhap = prompt(`Nhap C/R/U/D/E`)
//     if (giaTriNhap == "C") {
//         let tenKhoaHocMoi = prompt(`Nhap khoa hoc moi`)
//         let khoaHocMoi = new KhoaHoc(tenKhoaHocMoi)
//         mangKhoaHoc.push(khoaHocMoi)
//         console.log(mangKhoaHoc);
//     } else if (giaTriNhap == "R") {
//         console.log(mangKhoaHoc);
//     } else if (giaTriNhap == "U") {
//         let viTriSuaKhoaHoc = +prompt(`nhap vi tri muon sua khoa hoc`)
//         if (viTriSuaKhoaHoc < 0 || viTriSuaKhoaHoc > mangKhoaHoc.length - 1) {
//             console.log(`khong co vi tri nay trong khoa hoc`);
//         } else {
//             let tenMoi = prompt(`nhap vi tri ten khoa hoc moi`)
//             let trangThaiHoanThanhMoi;
//             mangKhoaHoc[viTriSuaKhoaHoc].ten = tenMoi
//             do {
//                 trangThaiHoanThanhMoi = prompt(`nhap trang thai moi cho khoa hoc 0/1`)
//             } while (trangThaiHoanThanhMoi != 0 && trangThaiHoanThanhMoi != 1);
//             if (trangThaiHoanThanhMoi) {
//                 mangKhoaHoc[viTriSuaKhoaHoc].hoanthanh = true
//             } else {
//                 mangKhoaHoc[viTriSuaKhoaHoc].hoanthanh = false
//             }
//             console.log(mangKhoaHoc);
//         }

//     } else if (giaTriNhap == "D") {
//         let viTriMuonXoa = prompt(`nhap vi tri khoa hoc muon xoa`)
//         if (viTriMuonXoa < 0 || viTriMuonXoa > mangKhoaHoc.length - 1) {
//             console.log(`vi tri nay khong ton tai`);
//         } else {
//             mangKhoaHoc.splice(viTriMuonXoa, 1)
//             console.log(mangKhoaHoc);
//         }
//     }
//     else if (giaTriNhap == "E" || giaTriNhap == undefined) {
//         console.log(`cam on`);
//         break;
//     }
// }






// Cho người dùng nhập vào 5 chữ cái C / R / U / D / E

// C – Cho người dùng nhập vào tên sản phẩm muốn mua.Nếu có thêm chúng vào carts khi
//  đó count trong stores của sản phẩn đó giảm đi 1

// R – In ra toàn bộ các sản phẩm trong stores và carts

// U – Hỏi người dùng vị trí update trong carts.Nếu tồn tại 
// cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong 
// stores cũng cập nhật theo.Update xong in lại stores và carts

// D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts.Tiến hành xóa và in ra lại

// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào
//  E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
let stores = [{ id: 1, name: "Milk", count: 100 }, { id: 2, name: "Yakult", count: 100 }, { id: 3, name: "Butter", count: 100, }];
let carts = []
while (true) {
    // Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
    let nguoiNhapVao = prompt("Nhap 1 trong 5 chu cai C/R/U/D/E")
    if (nguoiNhapVao == "C") {
        // C – Cho người dùng nhập vào tên sản phẩm muốn mua
        let tenSanPhamMuonMua = prompt(`nhap san pham muon mua`)
        let viTriTrongCarts = carts.findIndex(value => value.name == tenSanPhamMuonMua)
        let viTriTrongStores = stores.findIndex(value => value.name == tenSanPhamMuonMua)
        // Nếu có thêm chúng vào carts khi
        //  đó count trong stores của sản phẩn đó giảm đi 1
        if (viTriTrongCarts > 0) {
            carts[viTriTrongCarts].count++
            stores[viTriTrongStores].count--
        } else {
            if (viTriTrongStores >= 0) {
                carts.push({ id: stores[viTriTrongStores].id, name: stores[viTriTrongStores].name, count: 1 })
                stores[viTriTrongStores].count--
                console.log("Store sau mua:", stores);
                console.log("carts sau mua:", carts);
            } else {
                console.log("khong co san pham trong cua hang");
            }
        }
    } else if (nguoiNhapVao == "R") {
        console.log("store:", stores);
        console.log("carts:", carts);
    } else if (nguoiNhapVao == "U") {
        let viTriUpDateTrongCarts;
        do {
            viTriUpDateTrongCarts = prompt(`nhap vi tri muon sua`)
        } while (viTriUpDateTrongCarts < 0 || viTriUpDateTrongCarts > carts.length - 1);
        let soLuongMuonThayDoi = +prompt(`nhap so luong muon thay doi`)
        carts[viTriUpDateTrongCarts].name
        let viTriCuaSanPhamTrongStore = stores.findIndex(value => value.name == carts[viTriUpDateTrongCarts].name)
        if (soLuongMuonThayDoi > carts[viTriUpDateTrongCarts].count) {
            stores[viTriCuaSanPhamTrongStore].count -= (soLuongMuonThayDoi - carts[viTriUpDateTrongCarts].count)
            carts[viTriUpDateTrongCarts].count = soLuongMuonThayDoi
        } else {
            stores[viTriCuaSanPhamTrongStore].count += (carts[viTriUpDateTrongCarts].count - soLuongMuonThayDoi)
            carts[viTriUpDateTrongCarts].count = soLuongMuonThayDoi
        }
        console.log("store sau up date:", stores);
        console.log("cart sau update", carts);
    } else if (nguoiNhapVao == "D") {
        let viTriXoaTrongCarts;
        do {
            viTriXoaTrongCarts = prompt(`nhap vi tri muon sua trong carst`)
        } while (viTriXoaTrongCarts < 0 || viTriXoaTrongCarts > carts.length - 1);
        carts.splice(viTriXoaTrongCarts, 1)
        console.log("Carst sau xoa:", carts);
    } else if (nguoiNhapVao == "E" || nguoiNhapVao == undefined) {
        console.log(`Cảm ơn bạn đã đến với Rikkei Stores`);
        break;
    }

}












