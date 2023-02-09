# Restful-API-with-database

# 1. Data base models should follow giving rules:
     a. orders model:
         1. productName: string
         2. categoryID: ref to category ID
         3. productPrice: number
         4. productDescription: Sting
         5. buyerID: ref to buyer ID
         6. orderDate: Date
     b. Category model:
          1. categoryName: string
          2. categoryDescription: srtring
     c. Buyer model:
          1.  buyerName: string;
          2.  phoneNumber: number
          3.  buyerAddress: Address Model
     Address model:
          1. streetName: string
          2. city: string
          3. region: string
          4. postalCode: Number 

# 2. API routes: 

1. http://localhost:5000/api/api/orders - GET, POST, DELETE, PUT, GET BY ID orders
2. http://localhost:5000/api/api/category - GET, POST, DELETE, PUT, GET BY ID categories
3. http://localhost:5000/api/api/buyer - GET, POST, DELETE, PUT, GET BY ID buyers
4. http://localhost:5000/api/auth/login - send userName , and password generate JWT and send to user

# 3. Add  "limit" query and get limited data. Example:   
http://localhost:5000/api/orders?limit=3 gets 3 order data


# 4. Sort results using "sort" query with "desc" and "asc" keys. Examle:  myAPI/api/order?sort=desc sort data descending order


# 5. Get result in a date range. If you don't add any start date it will fetch from the beginning of time and if you don't add any end date it will fetch until now. You can also use limit(Number) and sort(asc|desc) as a query string to get your ideal results. Example:

http://localhost:5000/api/orders?startdate=2023-01-01&enddate=2023-12-12
https://myAPI.com/orders/startdate=2019-12-10&enddate=2020-10-10
