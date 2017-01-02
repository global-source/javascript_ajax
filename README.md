## Welcome to Global Source - JavaScript Ajax

---

Collection of Ajax requests via Javascript.

**This library will support to implement** :
 
      - GET 
      - POST
      - JSONP

## Installation
  
      <script src="./javascript_ajax.js"> </script>
      
## Using Library
 
     ajax.get(URL, DATA, CALLBACK);
     ajax.post(URL, DATA, CALLBACK);
     ajax.jsonp(URL, DATA, CALLBACK);
     
#### URL:
    Action URL to handle request.
    
#### DATA:
    List of form data to submit.
    
#### CALLBACK:
    Function to handle request after the request.
     
##### Overall Example:
    ajax.get('/path/to/handle/', {foo: 'bar'}, function() {
       // CALLBACK 
    });
