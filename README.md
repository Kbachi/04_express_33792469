Dynamic Web applications LAB 4.

Student ID; 33792469
VM host URl: https://doc.gold.ac.uk/usr/446/

This lab explored the Express frame work as instead of the base nodeJS approach explored 
previously.

This is a web application which uses Express to deploy routes onto the goldsmiths VM. This is 
being achieved by using the forever command on the linked  github repository.

Different Routes to test:
- `/` – Home ("Hello World")

- `/about` – About page

- `/contact` – Contact info

- `/date` – Current date/time

- `/welcome/:name` – Dynamic route with parameters

- `/chain` – Chained route handlers using `next()`

- `/file` – Sends static HTML file (`a.html`)
