console.log("LAB 03");

// Tạo 5 sản phẩm và mảng chứa các spham đó
const pd1 = {
  name: "T-shirt",
  price: 200,
  inStock: true,
};

const pd2 = {
  name: "Milk",
  price: 100,
  inStock: true,
};

const pd3 = {
  name: "Trousser",
  price: 400,
  inStock: false,
};

const pd4 = {
  name: "Headphone",
  price: 300,
  inStock: true,
};

const pd5 = {
  name: "Jacket",
  price: 500,
  inStock: false,
};

const products = [pd1, pd2, pd3, pd4, pd5];
console.log("original:", products);
console.log("========================");

// 1. In ra TÊN của sp đầu tiên
// 2. Thay đổi GIÁ sản phẩm thứ 2 thành 150 và in ra danh sách tất cả sản phẩm
// 3. Thêm 1 spham mới vào CUỐI mảng và in ra dsach
// 4. Xóa spham cuối và in ra dsach
// 5. Dùng forEach() để in ra tất cả TÊN spham
// 6. Dùng map() để tạo mảng mới chỉ chứa GIÁ spham
// 7. Dùng filter() để lấy ra các sản phẩm còn hàng
// 8. DÙng for...in để duyệt qua thuộc tính của spham đầu tiên

//1
const firstProduct = products[0];
console.log(">>>1.Name of the first product:", firstProduct.name);
console.log("========================");
//2
const products2 = [
  pd1,
  (pd2_new = {
    name: pd2.name,
    price: 150,
    inStock: pd2.inStock,
  }),
  pd3,
  pd4,
  pd5,
];
console.log(">>>2.New price of the 2nd product: ", pd2_new.price);
console.log(">>> New category:", products2);
console.log("========================");

//3
const lastProduct = {
  name: "Laptop",
  price: 2000,
  inStock: false,
};
products.push(lastProduct);
console.log(">>>3.Add last product:", products);
console.log("========================");

//4
products.pop();
console.log(">>>4.Delete the last product", products);
console.log("========================");

//5
console.log(">>>5.Show");
products.forEach((item, index) => {
  console.log("index =", index, " and name of product:", item.name);
});
console.log("========================");

//6
const priceList = products.map((item, index) => {
  return item.price;
});
console.log(">>>6.Price of products:", priceList);
console.log("========================");

//7
const inStockProducts = products.filter((item, index) => {
  return item.inStock === true;
});
console.log(">>>7.In stock Product:", inStockProducts);
console.log("========================");

//8
console.log(">>>8.Product 1:");
for (const key in pd1) {
  console.log(key, pd1[key]);
}
