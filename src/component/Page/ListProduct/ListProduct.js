import React, { useEffect, useState } from "react";
import CardProduct from "../../Global/CardProduct/CardProduct";
import axios from "axios";
import "./ListProduct.css";
import { useLocation } from "react-router-dom";
const ListProduct = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [productsPerPage] = useState(9); // Số sản phẩm mỗi trang
  const [totalPages, setTotalPages] = useState(1); // Tổng số trang
  const [products, setProducts] = useState([]); // Sử dụng state để lưu trữ danh sách sản phẩm
  const [filterProduct, setFilterProduct] = useState([]); // Sử dụng state để lưu trữ sản phẩm sau khi lọc
  const [minPrice, setMinPrice] = useState(""); // Giá min
  const [maxPrice, setMaxPrice] = useState(""); // Giá max
  const [selectedType, setSelectedType] = useState([]); // Lọc theo loại sản phẩm
  const [selectedColor, setSelectedColor] = useState([]); // Lọc theo màu sắc

  // Lấy tham số từ URL query
  const getQueryParams = () => {
    const queryParams = new URLSearchParams(location.search);
    return queryParams.get("keysearch") || "";
  };
  // Lấy sản phẩm từ API
  const getProduct = async () => {
    try {
      const response = await axios.get(
        "https://671646c833bc2bfe40bd38b4.mockapi.io/products"
      );
      const allProducts = response.data;
      setProducts(allProducts);
      setFilterProduct(allProducts); // Nếu không có lọc, hiển thị tất cả sản phẩm
      setTotalPages(Math.ceil(allProducts.length / productsPerPage)); // Tính tổng số trang
    } catch (err) {
      alert(err);
    }
  };
  // Sử dụng useEffect để gọi getProduct khi component mount
  useEffect(() => {
    getProduct();
  }, []);
  const handleFilter = () => {
    let filtered = products;

    // Lọc theo giá min/max
    if (minPrice !== "") {
      filtered = filtered.filter((item) => item.price >= minPrice);
    }
    if (maxPrice !== "") {
      filtered = filtered.filter((item) => item.price <= maxPrice);
    }

    // Lọc theo loại sản phẩm
    if (selectedType.length > 0) {
      filtered = filtered.filter((item) => selectedType.includes(item.type));
      console.log(filtered);
    }

    // Lọc theo màu sắc
    if (selectedColor.length > 0) {
      filtered = filtered.filter((item) =>
        item.colors.some((color) => selectedColor.includes(color.name))
      );
    }

    setFilterProduct(filtered);
    // Cập nhật lại số trang khi lọc sản phẩm
    setTotalPages(Math.ceil(filtered.length / productsPerPage));
    setCurrentPage(1); // Khi lọc, reset về trang 1
  };

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    setSelectedType((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleColorChange = (e) => {
    const { value, checked } = e.target;
    setSelectedColor((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  // Xác định các sản phẩm cần hiển thị trên trang hiện tại
  const indexOfLastProduct = currentPage * productsPerPage; // Chỉ số sản phẩm cuối cùng của trang
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage; // Chỉ số sản phẩm đầu tiên của trang
  const currentProducts = filterProduct.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  ); // Lấy sản phẩm của trang hiện tại
  // Xử lý thay đổi trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    // Nếu có keysearch, lọc sản phẩm dựa trên title
    const keysearch = getQueryParams();
    if (keysearch) {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(keysearch.toLowerCase())
      );
      setFilterProduct(filteredProducts);
      setTotalPages(Math.ceil(filteredProducts.length / productsPerPage)); // Cập nhật lại số trang
      setCurrentPage(1); // Khi lọc, reset về trang 1
    } else {
      setFilterProduct(products); // Nếu không có từ khóa, hiển thị tất cả sản phẩm
      setTotalPages(Math.ceil(products.length / productsPerPage)); // Cập nhật lại số trang
    }
  }, [location.search, products]);
  // Gọi hàm lọc khi thay đổi các thứ cần lọc
  useEffect(() => {
    handleFilter();
  }, [minPrice, maxPrice, selectedType, selectedColor]); // Chạy khi products hoặc keysearch thay đổi

  const coloors = ["Gray", "Red", "Black", "White", "Green", "Blue"];
  return (
    <div className="container">
      <div className="title">
        <h1>Products</h1>
      </div>
      <div className="row">
        <div className="col-4 left-product">
          <p className="filter">Filter</p>
          <details open>
            <summary style={{ listStyleType: "none" }}> Availability </summary>
            <div className="count-product">
              <p>0 select</p>
              <p>reset</p>
            </div>
            <div className="check-product">
              <div className="check-item">
                <input type="checkbox" /> In stock
                <p>(20)</p>
              </div>
              <div className="check-item">
                <input type="checkbox" /> Out of stock
                <p>(20)</p>
              </div>
            </div>
          </details>
          <details open>
            <summary style={{ listStyleType: "none" }}> PRICE </summary>
            <div className="count-product">
              <p>The highest price is 40.00USD</p>
              <p>reset</p>
            </div>
            <div className="price-items">
              <div className="price">
                <label>Min price:</label>
                <input
                  type="text"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  placeholder="0"
                />
              </div>
              <div className="price">
                <label>Max price:</label>
                <input
                  type="text"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  placeholder="40.00"
                />
              </div>
            </div>
          </details>
          <details open>
            <summary style={{ listStyleType: "none" }}> PRODUCT TYPE </summary>
            <div className="count-product">
              <p>0 select</p>
              <p>reset</p>
            </div>
            <div className="check-product">
              <div className="check-item">
                <input
                  type="checkbox"
                  value="Accessories"
                  onChange={handleTypeChange}
                />
                <label>Accessories</label>
              </div>
              <div className="check-item">
                <input
                  type="checkbox"
                  value="Leather Suit"
                  onChange={handleTypeChange}
                />{" "}
                <label> Leather Suits</label>
              </div>
              <div className="check-item">
                <input
                  type="checkbox"
                  value="Jacket"
                  onChange={handleTypeChange}
                />
                <label>Jacket</label>
              </div>
              <div className="check-item">
                <input
                  type="checkbox"
                  value="Shoes"
                  onChange={handleTypeChange}
                />
                <label>Shoes</label>
              </div>
            </div>
          </details>
          <details open>
            <summary style={{ listStyleType: "none" }}> COLOR </summary>
            <div className="count-product">
              <p>{selectedColor.length} select</p>
              <p onClick={() => setSelectedColor([])}>Reset</p>
            </div>
            <div className="check-product">
              {coloors.map((color) => (
                <div className="check-item" key={color}>
                  <input
                    type="checkbox"
                    value={color}
                    onChange={handleColorChange}
                    checked={selectedColor.includes(color)}
                  />
                  <label>{color}</label>
                </div>
              ))}
            </div>
          </details>
        </div>
        <div className="col-8 right-product">
          <div className="row">
            {currentProducts.length > 0 ? (
              currentProducts.map((item) => (
                <div className="col-4" key={item.id}>
                  <CardProduct
                    id={item.id}
                    title={item.title}
                    type={item.type}
                    colors={item.colors}
                    image={item.img}
                    price={item.price}
                    sale={item.priceSale}
                  />
                </div>
              ))
            ) : (
              <p>No products found</p>
            )}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
