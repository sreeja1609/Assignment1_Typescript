var ShoppingItem = /** @class */ (function () {
    function ShoppingItem(description) {
        this._description = description;
        this._deleted = false;
        this._done = false;
    }
    Object.defineProperty(ShoppingItem.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShoppingItem.prototype, "deleted", {
        get: function () {
            return this._deleted;
        },
        set: function (status) {
            this._deleted = status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShoppingItem.prototype, "done", {
        get: function () {
            return this._done;
        },
        set: function (status) {
            this._done = status;
        },
        enumerable: false,
        configurable: true
    });
    ShoppingItem.prototype.toggleDone = function () {
        this.done = !this.done;
    };
    return ShoppingItem;
}());
var shoppingList = [];
var newItemInput = document.getElementById('new-item');
var shoppingListElement = document.getElementById('shopping-list');
var itemsCountElement = document.getElementById('items-count');
var hideCompletedCheckbox = document.getElementById('hide-completed');
function renderList() {
    shoppingListElement.innerHTML = '';
    var totalCount = 0;
    var markedCount = 0;
    var unmarkedCount = 0;
    var hideCompleted = hideCompletedCheckbox.checked;
    shoppingList.forEach(function (item, index) {
        if (!item.deleted) {
            totalCount++;
            if (item.done) {
                markedCount++;
            }
            else {
                unmarkedCount++;
            }
            if (!hideCompleted || !item.done) {
                var itemElement = document.createElement('li');
                itemElement.className = item.done ? 'shopping-item marked-item' : 'shopping-item';
                var itemText = document.createElement('span');
                itemText.className = 'item-text';
                itemText.textContent = item.description;
                itemElement.appendChild(itemText);
                var deleteButton = document.createElement('button');
                deleteButton.className = 'delete-button';
                deleteButton.textContent = 'X';
                deleteButton.addEventListener('click', function (event) {
                    event.stopPropagation();
                    item.deleted = true;
                    renderList();
                });
                itemElement.addEventListener('click', function () {
                    item.toggleDone();
                    renderList();
                });
                itemElement.appendChild(deleteButton);
                shoppingListElement.appendChild(itemElement);
            }
        }
    });
    itemsCountElement.innerHTML = "\n        Total items: ".concat(totalCount, " |\n        Marked items: ").concat(markedCount, " |\n        Unmarked items: ").concat(unmarkedCount, "\n    ");
}
newItemInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && newItemInput.value.trim() !== '') {
        var newItem = new ShoppingItem(newItemInput.value.trim());
        shoppingList.push(newItem);
        newItemInput.value = '';
        renderList();
    }
});
hideCompletedCheckbox.addEventListener('change', function () {
    renderList();
});
renderList();
