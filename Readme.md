*This repository is a mirror of the [component](http://component.io) module [ericgj/accordion-tree](http://github.com/ericgj/accordion-tree). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ericgj-accordion-tree`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# Accordion Tree

  A no-frills "Tree View" component.

  Love it or hate it, it's here to stay... 
  
  <img alt="Example" src="http://i.imgur.com/dJ1mcOT.png" />

  See `test/index.html` for example usage.
  
  Please note that this component does not currently implement 
  re-ordering of tree structure, etc.

## Installation

    $ component install ericgj/accordion-tree

## Events

  - `selectLeaf(node)`      when a leaf node is selected
  - `selectBranch(node)`    when a branch node is selected 
  - `select(node, type)`    when any node is selected (type is 'leaf' or 'branch')

## API
  
### AccordionTree(el, options)

  Creates a new `AccordionTree` under the given DOM element or selector.
  See info on the generated structure below.

  The following options are available:

  - `collapse {Boolean}`        allows collapse of selected node (default true)
  - `multiexpand {Boolean}`     allows expansion of more than one panel per tree 
                                  level (default false)
  - `branchexpand {Boolean}`    clicking on branch label expands/collapses node, 
                                  in addition to selecting (default true). When 
                                  false, only clicking the caret/icon expands/
                                  collapses node.

### AccordionTree#addBranch(content,slug)

  Add a branch node with the given content, and (optional) identifying slug.
  Returns the new node.

### AccordionTree#addLeaf(content,slug)

  Add a leaf node with the given content, and (optional) identifying slug.
  Returns the new node.

### AccordionTree#build(object,[node])

  Build a tree from the given (json) object, under the given node or the tree root
  node by default. Easy tree construction for simple cases.

### AccordionTree#clear

  Remove the contents of the entire tree.

### AccordionTree#removeNode(node)

  Remove the subtree under and including the specified node.


### Node#addBranch(content,slug)

  Add a branch node with this node as the root.

### Node#addLeaf(content,slug)

  Add a leaf node with this node as the root.

### Node#remove

  Remove the subtree under and including this node.
  
### Node#expand

  Programmatically expand this node (following collapse/multiexpand behavior).

### Node#collapse

  Programmatically collapse this node.

### Node#collapseAll

  Programmatically collapse this node and all its siblings.



## DOM structure

  In the DOM, the generated tree looks like this:

  ```html
  <div class="accordion-tree">
    <ul class="children">
      <li class="branch" data-path="/a-branch">
        <h3>
          <span class="caret"></span>
          <span class="icon"></span>
          A branch
        </h3>
        <ul class="children">
          <li class="leaf" data-path="/a-branch/a-leaf">
            A leaf
          </li>
          <li class="leaf" data-path="/a-branch/another-leaf">
            Another leaf
          </li>
        </ul>
      </li>
      <li class="branch" data-path="/another-branch">
        <h3>
          <span class="caret"></span>
          <span class="icon"></span>
          Another branch
        </h3>
        <ul class="children">
        </ul>
      </li>
    </ul>
  </div>
  ```

  Note that the top-level DOM element will have the "accordion-tree" class
  added on initialization.

  Note that the `<span class="icon">` you can use to style your own expand/
  collapse arrows, instead of the default in `<span class="caret">`. You
  should have something like this:

  ```css
  .accordion-tree .caret { 
    display: none; 
  }

  .accordion-tree .icon {
    display: inline-block;
    /* background image or content for right-arrow */
  }

  .accordion-tree .expanded > * > .icon {
    /* background image or content for down-arrow */
  }
  ```

## Help

Questions, suggestions, pull requests, etc. please contact me.

## License

  MIT



