Your task is to create a React component named ListUsers, which takes a list of users in the props and displays the users, sorted alphabetically by their last name (case insensitive, users all have different last names).
 
users is an array of objects, where each object contains 2 keys: lastName and firstName. 
 
The following example:
<ListUsers users={[{firstName: 'Ada', lastName: 'Lovelace'}, {firstName: 'Donald', lastName: 'Knuth'}]} />
Should be rendered as:
<div>
    <div class="user-count">Users: 2</div>
    <ul class="user-list">
        <li>Donald Knuth</li>
        <li>Ada Lovelace</li>
    </ul>
</div>
If users is empty or omitted, then the component must display "Users: 0" and no list is displayed (no <ul> nor <li> elements).
Update the component skeleton on the right according to the above statement, do not change the classes for the <div> and <ul> elements.
