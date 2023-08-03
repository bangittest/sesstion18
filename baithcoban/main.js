

// Bài 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên,
//     tuổi, địa chỉ và số điện thoại.Sau đó truy xuất các thuộc tính của đối tượng trên
// let doiTuong = {
//     name: "Nguyen Van A",
//     age: "22",
//     adress: "Ha noi",
//     phone: "092837289"

// }
// console.log(doiTuong);
// Bài 2: Viết chương trình tạo đối tượng student có cặp key và value
// tương ứng như dưới đây, sau đó khởi tạo đối tượng newStudent có các thuộc
// tính tương tự(value tự điền).Sau đó tạo mảng “students”
// để chứa chúng.Cuối cùng truy xuất các thuộc tính của đối tượng
// “newStudent” sau khi thêm vào mảng “students”
class student {

    constructor(id, name, gander, age, mark) {
        this.id = id
        this.name = name
        this.gander = gander
        this.age = age
        this.mark = mark
    }
}

let studen1 = new student(1, "Nguyen Van A", "Nam", 20, 8)
console.log(studen1);
for (const key in studen1) {
    console.log(studen1[key]);
}
let studen2 = new student(2, "Nguyen VAn B", "nu", 22, 9)
console.log(studen2);
for (const key in studen2) {
    console.log(studen2[key]);
}
let student3 = []
student3.push(studen1, studen2)
// Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm trung bình cao hơn và in ra toàn bộ thông tin của học sinh đó

let index;
let max = student3[0].mark;
for (const i in student3) {
    if (student3[i].mark > max) {
        index = i;
        max = student3[i].mark;
    }
}
console.log(student3[index]);



// // Bài 4: Tạo thêm đối tượng “newStudent2” với các thuộc tính tương tự như đối tượng
// //  “newStudent” với value bất kỳ.Sau đó thêm vào mảng “students” (ở bài 2).
// //   Tính điểm trung bình của các học sinh trong mảng students trên.Nếu trên 7.5 thì đánh giá lớp khá,
// //     từ 5 đến 7.5 thì đánh giá lớp trung bình, dưới 5 là lớp yếu
// let sum = 0
// for (const i in student3) {
//     sum = sum + student3[i].mark
// } if ((sum / student3.length) > 7.5) {
//     console.log(`kha`);

// } else if ((sum / student3.length) > 5) {
//     console.log(`trung binh`);
// } else {
//     console.log(`yeu`);
// }
// console.log(sum);






