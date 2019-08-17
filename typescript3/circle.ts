 
 class Circle1 {


    radius : number;
    PI : number;
    result : number;

    constructor (radius: number){
        this.PI = 3.14;
        this.radius= radius;
    }

     Area():void //hyala pan contructor boltat
     // mehtod ae na ti ?


     // ha contructor pn hou shakto ha
     // ok okkk
     //3rd check kr na
     
        { 
            this.result = this.PI * this.radius * this.radius ;
           console.log("Area of circle : "+this.result ) 
        } 
 }

 var obj = new Circle1(5);
 obj.Area();