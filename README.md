# Simple Api document builder
Document your API in a simple way.

# How it works
## 1. Create the json structure
Create a `user.json` file in the folder `/api/` with the following structure
```json
{
    "title":"User info",
    "description":"Etiam vel...",
    "method":"post",
    "path":"/api/v1/user/{id}",
    "path_info":"Curabitur...",
    "parameters":[
        ["{id}","4553356","Nulla nu..."],
        ["authorization","auth123token","Lorem..."],
        ["email","albert@gamil.com","Integer nec..."],
        ["active","true|false","Maecenas..."]
    ],
    "header":{
        "authorization": "auth123token"
    },
    "body":{
        "email":"albert@gamil.com",
        "active":true
    },
    "response":{
        "success": true,
        "user": {
            "name":"Albert",
            "email":"albert@gamil.com",
            "phone":"+51 1 568833002",
            "age":23,
            "city":"New York"
        }
    }
}
```

## 2. Build the html
Run the command 
```npm
npm run build
```
and open the folder `public`, the `user.html` will be created.

![Html generated screenshot example](example_user.png?raw=true "Html generated screenshot example")

## 3. Open on browser
The genered result is pure html files, just open it on browser or public it on S3 for your team.

## Collaborate
Feel free to collaborate with this project.

## Follow me
on twitter [@rollrodrig](https://twitter.com/rollrodrig)