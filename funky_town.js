var fibonacci = function (n){
    if(n <= 1){
	return 1;
    }
    else{
	return fibonacci(n -1) * n;
    }
};

var gcd = function (a,b){
    if(b == 0){
	return a;
    }
    else{
	return gcd(b, a % b);
    }
};

var students = ['BOB', 'JOE','RAY','SAM','HARRY','CHLOE'];

var randomStudent= function(){
    return students[Math.floor(Math.random() * (students.length))];
};
fibonacci(5);
gcd(2,4);
gcd(15, 75);
randomStudent();
randomStudent();
randomStudent();
