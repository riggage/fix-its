const App = () => {
  return (
    <div>
      <h1>welcome to the Fix-It challenges</h1>
      <h2>get fixing all of these broken components</h2>
      <p>all of the FixIt challenges are in seperate branches, you are currently in the <b>main</b> branch</p>
      <h2><u>git commands</u></h2>
      <ul>
        <li>git clone <i>(clone this repository, direct to the location where you want to save in the terminal and hit enter)</i></li>
        <li>git branch <i>(look at the current branch you are on and the others that you can switch to)</i></li>
        <li>git checkout [branch-name] <i>(switch to another branch, eg <b>git checkout fixit1</b> )</i></li>
        <li>make you changes and fix the code</li>
        <li>git add <i>(add your new fixes)</i></li>
        <li>git commit <i>(save your changes)</i></li>
        <li>git remote <i>(finished? use this command to see the name of the remote)</i></li>
        <li>git push [remote name] [branch] <i>(push your compleleted code to your repo)</i></li>
        <li>git branch <i>(choose another branch to fix those other components, and repeat this process)</i></li>
      </ul>
    </div>
  );
}

export default App;
