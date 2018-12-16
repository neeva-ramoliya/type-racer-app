let doSomething = () => {
 return   Promise.resolve("ksdjfk")
}
let doSomethingElse = () => {

    console.log("doing Something else");
    return "SFGDG"
}
doSomething().then(function () {
  return doSomethingElse();
}).then((data) => {
    console.log(data)
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);