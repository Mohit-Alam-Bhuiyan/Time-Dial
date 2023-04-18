import React from 'react';
import './Comment.css'
const Comment = () => {
    return (
        <div className='comment'>
            <h3>How react works?</h3>
            <p>
            React works by breaking down the user interface into individual components. Each component is responsible for rendering a specific part of the UI and can contain other sub-components. React uses a virtual DOM (Document Object Model) to efficiently update the UI. When a component's state changes, React compares the new state to the previous one and updates the virtual DOM accordingly. Then, it performs a "diffing" algorithm to determine the minimum number of changes required to update the actual DOM.This approach allows React to update the UI quickly and efficiently, without having to re-render the entire page every time a change is made. It also makes it easy to build complex, dynamic user interfaces with a lot of moving parts.
            </p>

            <h3>Props vs States</h3>
            <p>
            In React, both props and state are used to manage data in a component, but they serve different purposes.

Props are short for "properties" and are used to pass data from a parent component to a child component. Props are read-only, which means they cannot be modified by the child component. The parent component can update the props passed down to the child component, which will trigger a re-render of the child component with the updated props.

State, on the other hand, is used to manage data within a component. State is mutable, which means it can be updated within the component using the setState method. When the state is updated, React will re-render the component to reflect the changes.

In general, props are used for data that is passed down from a parent component to a child component and does not change within the child component. State is used for data that is managed within a component and may change based on user interaction or other factors.

It's important to note that changing the state can trigger a re-render of the component and its children, which can affect the performance of the application. Therefore, it's important to use state carefully and only update it when necessary.
            </p>
        </div>
    );
};

export default Comment;