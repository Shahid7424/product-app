import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// ProductForm component
const ProductForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    productName: '', // Product Name field
    email: '',       // Email field
    price: '',       // Price field
    quantity: '',    // Quantity field
    city: '',        // City field
    state: '',       // State field
    zipCode: '',     // Zip Code field
  });

  // State to manage the table data
  const [tableData, setTableData] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update the corresponding field in formData
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    setTableData([...tableData, formData]); // Add form data to tableData array
    setFormData({
      productName: '', // Reset Product Name field
      email: '',       // Reset Email field
      price: '',       // Reset Price field
      quantity: '',    // Reset Quantity field
      city: '',        // Reset City field
      state: '',       // Reset State field
      zipCode: '',     // Reset Zip Code field
    });
  };

  // Handle edit button click
  const handleEdit = (index) => {
    const selectedData = tableData[index]; // Get the data of the selected row
    setFormData(selectedData); // Populate form with selected row data
  };

  // Handle delete button click
  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index); // Remove selected row from table
    setTableData(updatedData); // Update the tableData state
  };

  // Render the form and table
  return (
    <div className="container">
      <h2 className="mt-4">Product Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label>Quantity</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label>State</label>
            <select
              className="form-control"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select State</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Karnatka">Karnatka</option>
              <option value="MP">MP</option>
              <option value="Gujrat">Gujrat</option>
            </select>
          </div>
          <div className="col-md-6">
            <label>Zip Code</label>
            <input
              type="text"
              className="form-control"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              pattern="\d{6}" // Enforce 6-digit zip code
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>

      <h2 className="mt-5">Product List</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Email</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Amount</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.productName}</td>
              <td>{item.email}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td> {/* Calculate total amount */}
              <td>{item.city}</td>
              <td>{item.state}</td>
              <td>{item.zipCode}</td>
              <td>
                <button
                  className="btn btn-warning me-2"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductForm;
