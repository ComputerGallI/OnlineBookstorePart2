module02_week06_day02
BrowserStorage

To keep building from our starting point in yesterday's lab, COPY your src folder into this repo.

Implement localStorage in your app so that you data from 1 page can persist and carry over to another.

When creating a new order, the Order Page should use JSON.stringify() and localStorage.setItem()

If continuing an existing order, JSON.parse() and localStorage.getItem() should be used to access the previous configuration
The view page should use JSON.parse() and localStorage.getItem() to access the order and display it's contents on screen.