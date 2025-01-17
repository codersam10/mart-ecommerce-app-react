import heroImg from "../images/table.jpg";
import { products } from "../utils/products";
import ProductCard from "../components/ProductCard";
import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import LimitContentWidth from "../utils/LimitContentWidth";
const Shop = () => {
  const [filterValue, setFilterValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilter = () => {
    if (filterValue) {
      const filtered = products.filter((product) => {
        return product.category === filterValue;
      });
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchValue) {
      const searched = products.filter((product) => {
        return product.productName
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredProducts(searched);
    } else {
      setFilteredProducts(products);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [filterValue]);

  return (
    <div>
      <section className="relative h-60">
        <div className="absolute text-white text-3xl font-semibold top-0 left-0 right-0 bottom-0 grid place-content-center bg-black/50">
          Product
        </div>
        <img
          className="w-full h-full object-cover"
          src={heroImg}
          alt=""
        />
      </section>
      <section>
        <LimitContentWidth>
          <header className="px-5 py-8">
            <form
              className="flex flex-col md:flex-row justify-between gap-3 md:gap-16"
              onSubmit={handleSearch}
            >
              <select
                className="filter bg-blue-950 text-white p-3 rounded-lg"
                name="Filter by Category"
                id="filter"
                value={filterValue}
                onChange={(e) => {
                  setFilterValue(e.target.value);
                }}
              >
                <option value="">--Filter by Category--</option>
                <option value="sofa">Sofa</option>
                <option value="chair">Chair</option>
                <option value="mobile">Mobile</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
              <div className="flex items-center gap-2 bg-gray-200 rounded-full pr-3 grow">
                <input
                  className="w-full p-2 bg-gray-200 rounded-full"
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  name="search"
                  id="search"
                  aria-label="search"
                  placeholder="Search..."
                  autoComplete="on"
                  autoFocus
                />
                <button
                  className="p-2 hover:bg-blue-950 hover:text-white rounded-full"
                  type="submit"
                >
                  <IoSearchOutline style={{ color: "inherit" }} />
                </button>
              </div>
            </form>
          </header>
          <div className="products grid grid-cols-1 md:grid-cols-3 gap-5 p-10 md:p-10 lg:px-36 lg:py-24">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                productData={product}
              />
            ))}
          </div>
        </LimitContentWidth>
      </section>
    </div>
  );
};

export default Shop;
