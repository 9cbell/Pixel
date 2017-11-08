function Pixel(r,g,b){

    this.red=r;
    this.green=g;
    this.blue=b;


    this.addRed = function(n){

         this.red = this.red + n;

         if(this.red < 0){
           this.red = 0;
         }

        else if(this.red > 255){
          this.red = 255;
        }

    };

    this.addGreen = function(n){

        this.green = this.green + n;

        if(this.green < 0){
          this.green = 0;
        }

        else if(this.green > 255){
          this.green = 255
        }
    };

    this.addBlue = function(n){

        this.blue = this.blue + n;

        if(this.blue < 0){
          this.blue = 0;
        }

        else if(this.blue > 255){
          this.blue = 255;
        }
    };

    this.brighten = function(n){
        this.red = this.red*(1 + n)
        this.green = this.green*(1 + n)
        this.blue = this.blue*(1 + n)
    };

    this.complement = function(n){
        return new Pixel(255 - this.red, 255 - this.green, 255 - this.blue)
    };

    this.grayScale = function(n){
        return(this.red + this.green + this.blue) / 3;
    };


}

function report(mypixel){
    //reduces redundancy of code.
    console.log("My red is :"+mypixel.red);
    console.log("My green is :"+mypixel.green);
    console.log("My blue is :"+mypixel.blue);
}

//declares a main method to test the code.
function main(){

    //creates a Pixel-object
    let rectangle = new Pixel(200,100,120);

    //use a report to test each function
    report(rectangle);

    rectangle.addRed(60);
    rectangle.addGreen(60);
    rectangle.addBlue(60);

    console.log("------Added 60 to each value above------");
    report(rectangle);

    rectangle.brighten(-0.40);
    console.log("------Reduced brightness by 40%------");
    report(rectangle);

    rectangle.complement();
    console.log("------Complement to the previous color------");
    report(rectangle);

    rectangle.grayScale();
    console.log("------Averages the 3 values from the brighten example------");
    report(rectangle);


}

//runs the code
main();
