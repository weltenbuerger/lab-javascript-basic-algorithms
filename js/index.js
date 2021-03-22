// Iteration 1: Names and Input
const hacker1 = 'Bryan Sanderson'

console.log(`The driver's name name is ${hacker1}`)

const hacker2 = 'Ruben Gorden Karlsson'

console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  )
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  )
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  )
}

// Iteration 3: Loops
const upperCaseInSpace = (name) => {
  arr = name.split('')
  console.log(arr.join(' ').toUpperCase())
}
upperCaseInSpace(hacker1)

const reverseStr = (str) => {
  let newString = ''
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  console.log(newString)
}

reverseStr(hacker2)

if (hacker1 < hacker2) {
  console.log("The driver's name goes first")
} else if (hacker1 > hacker2) {
  console.log('Yo, the navigator goes first definitely.')
} else {
  console.log('What?! You both have the same name?')
}

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Proin auctor massa eget dignissim consequat. Quisque arcu eros, 
mattis et semper in, feugiat ut tortor. 
Vestibulum dictum ipsum a tempor tristique. Vivamus quis arcu sagittis, malesuada diam quis, rhoncus arcu. 
Proin mattis non lectus at volutpat. Suspendisse potenti. Aenean ac ligula id augue commodo finibus luctus in justo. Praesent ac tempor nunc, 
maximus ullamcorper ante. Vivamus velit ligula, feugiat posuere tortor cursus, interdum porttitor risus. Nullam tincidunt felis et turpis rutrum, sed ultrices orci pulvinar. Vestibulum egestas elit nec enim ullamcorper sodales. 
Praesent risus libero, pharetra at libero quis, auctor interdum turpis. Fusce ut lacus lectus. Etiam non libero eget nisi pellentesque fermentum. Maecenas sollicitudin feugiat est et vulputate. Quisque suscipit arcu diam, sed dignissim libero ullamcorper vestibulum. Donec vestibulum iaculis leo, sit amet faucibus erat vehicula sed. Aenean ut posuere sem. 
Quisque rutrum, felis sed molestie fringilla, arcu erat luctus tortor, tincidunt commodo lectus ipsum nec elit. Nullam at neque sed turpis congue faucibus consequat vitae felis. Fusce iaculis at elit in tristique. 
Cras sagittis mollis ultricies. 
Quisque et commodo sem. Praesent magna purus, pretium ut purus ut, 
congue tristique ligula. Sed fermentum nunc eu lectus vestibulum, lacinia bibendum tellus lobortis. Nam id ornare libero. Suspendisse nec fringilla purus, tempus tempor purus. Aliquam nulla massa, tristique quis lacus et, tristique bibendum sapien. Ut malesuada quis nunc id hendrerit. Donec magna nulla, posuere a lectus et, pulvinar placerat tortor. Aliquam porta massa at ornare consequat. Integer eget rutrum arcu, quis sodales magna. Praesent ligula tellus, maximus ac metus at, sagittis volutpat nibh. Donec consequat dapibus magna quis lacinia. Praesent faucibus maximus metus ut faucibus. Donec ultricies molestie augue a ornare. Nam tellus lorem, rutrum quis mi sit amet, bibendum pharetra ipsum. In hendrerit sit amet diam ac semper. Praesent vitae odio tincidunt, ornare tellus vitae, facilisis ipsum.`

console.log(lorem.split(' ').length)

const loremWithoutPunct = lorem.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')

console.log(loremWithoutPunct.split(' et').length - 1)
