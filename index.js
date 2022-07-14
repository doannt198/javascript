function sumCb(a, b) {
    
}

function caculate(a, b, cb) {
    return cb(a, b);
}

// Expected results
// caculate(1, 2, sumCb) // Output: 3
// caculate(1, 2, subCb) // Output: -1
// caculate(1, 2, multiCb) // Output: 2
// caculate(3, 1, divCb) // Output: 3


/* Ở bài học này, các bạn hãy sử dụng kiến thức
 về callback vừa học ở bài trước để hoàn
  thành function sumCb và tạo thêm các function subCb, multiCb và divCb.

Quan sát expected results bên code editor. */