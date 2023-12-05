const array = [1, 2, 3, 4, 5, 6, 7, 8];
// lọc ra những phần tử thỏa mãn điều kiện hoặc k tm
// nó sẽ trả về 1 mảng mới chứa các giá trị thỏa mãn điều kiện, nếu k có điều kiện thảo mãn thfi trả về mảng rỗng
// hay ứng dụng khi muốn xóa phần tửu trong mảng
// const filterNumber = array.filter((item,index) => {
//     console.log(`item: ${item},index: ${index}` );
//     return item !== 1;

// });
// console.log(filterNumber);

// const filterNumber = array.filter((arr) => arr !== 1);
// console.log(filterNumber);

// tìm kiếm 1 phần tử trong mảng theo 1 điều kiên kiện cụ thể => hàm find()

// nó sẽ trả về 1 phần tử có trong mảng mà thỏa mãn điều kiện

// const findNumber = array.find((arr) => arr === 9); // kết quả undefined
// console.log(filterNumber);

//lấy ra vị trí cuẩ 1 phần tử trong mảng nếu thỏa mãn điều kiện
// hay ứng dụng tìm vị trí của 1 phần tửu trong mảng
// nó trả về vị trí của phần tử  trong mảng nếu thảo mãn điều kiện và trả về -1 nếu không thỏa mãn
// const findIndex = array.findIndex((arr) => arr === 4); // kết quả 3.
// console.log(findIndex);

// //Hàm làm thay đổi tất cả giá trị phần tử trong mảng => fill ()

// const fillArray = array.fill(0, 0, 5); // kết quả [0,0,0,0,6,7,8]
// console.log(fillArray);

//kiểm tra xem là tất cả các phần tử có trong mảng có thảo mãn điều kiện không
//chỉ cần cso 1 điều kiện sai thì sẽ trả về false <=> toán tử &&
const checkAllCondition = array.every((arr) => arr >= 1); // kết quả true
console.log(checkAllCondition);

// kiểm tra chỉ câdnf 1 đk thỏa mãn thì mảng sẽ nhận true
const checkSomeCondition = array.some((arr) => arr >= 10);
console.log(checkSomeCondition);
