/* concat(): Nối mảng a vs mảng b ,
  copyWithin(): Copy phần tủ của mảng và ghi đè lên vị trí được cài đặt (vị trí ghi đè, vị trí bắt đầu copy, vị trí kết thúc copy),
   entries(): biến mảng thông thường thành một Araay Itaric, gồm có các mảng con có cặp key và value , 
   every(): kiểm tra các phần tủ trong 1 mảng thoả mãn 1 logic cho trước, trả về true nếu tất cả hợp lệ và false nếu không hợp lệ  
   fill() thay đổi giá trị của tất cả  phần tử trong mảng về cùng 1 giá trị., 
  filter() x trả về một mảng gôm các phần tử thoả mãn điều kiện
, find(), x trả về phần tử đầu tiên thoả mãn điều kiện, tham số truyển vào là một callback funtion 
findIndex(),x trả về vị trí của phần tử đầu tiền thoả mãn yêu cầu trong mảng, tham số truyển vào là callback function
 forEAch() ,x duyệt qua các phần tủ có trong mảng là một hàm bất đồng bộ
 from() ,x biến chuỗi thành một Array, 
 includes() x, kiểm tra xem phần tử đó có trong mảng hay k, trả về true nếuphần tủe đó trong mẩng 
 indexOf() x, trả về vị trí của phần tử trong mảng, nếu không tìm thấy trả về -1
 isArray(),x kiểm tra có phải mảng hay không Array.isArray()
join()x: biến mảng thành chuỗi mặc định không truyền tham số thứ 2 sẽ ngăn cách bởi dấu phẩy
,
keys()x 
lastindexof(), tìm vị trí cuối cùng thỏa  mãn điều kiện 
 length, thuộc tính kiểm tra độ dài của mảng và của chuỗi
  map()x trả về một mảng có các phần tử tron
  pop()x, xóa phần tử ở cuối mảng vè trả về phàn tử bị xóa
  prototype()x ,
   push(), thêm phần tử vào vị trí cuối mảng và trả vể độ dài mới của mảng
   reduce() :Lặp qua các phần tử và 
reduceRight(),
 reverse(): đảo vị trí của các phần tử trong mảng  
 shift()x, xoá phần tủ đầu tiền của mảng và trả về phần tử bị xoá
 slice()x, lấy ra các phần tử trong mảng và không ảnh hưởng gì đên 
  some()x , lặp qua các phần tử và check phân tử có trong mảng k, return true of có or false if khôg
  sort()x, hàn sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần xx
  splice(), xoá một hoặc nhiều phần tử trong mảng
   toString()x, chuyển mảng thành chuỗi
    unshift() thêm vào đầu mảng và trả về đồ dài mới của mảng, 
    Valueof() */
var listUser 
fetch('./user.json')
.then(async (data)=> {
   listUser =await data.json()
  console.log(listUser)
  listUser.unshift({ID:6, Name:"Peter", Age: 20, Gmail:"anv@gmail.com", Bithday: "22/12/2022"})
  listUser.sort((a,b)=> a.Name.localeCompare(b.Name))
  var index = listUser.findIndex((t)=> t.ID == 2)
  listUser.splice(index, 1)
  var listFilter = listUser.filter((t)=> t.Name=="Avatar") 
  console.log(listFilter) 
  var indexName = listUser.findIndex((t)=> t.Name =="Avatar")
  listUser.splice(indexName,1,{ID: 3, Name: 'Game', Age: '2008', Gmail: 'PG-13', Brithday: '18 Jul 2008'})
  console.log(listUser)
  function filterList(array) {
      return array.Age > 2008
  }
  var filterByAge = listUser.filter(filterList)
  console.log(filterByAge)
  
}).catch((error) => console.log(error))



