class ShoppingItem {
    private _description: string;
    private _deleted: boolean;
    private _done: boolean;

    constructor(description: string) {
        this._description = description;
        this._deleted = false;
        this._done = false;
    }

    get description(): string {
        return this._description;
    }

    get deleted(): boolean {
        return this._deleted;
    }

    get done(): boolean {
        return this._done;
    }

    set description(description: string) {
        this._description = description;
    }

    set deleted(status: boolean) {
        this._deleted = status;
    }

    set done(status: boolean) {
        this._done = status;
    }

    toggleDone(): void {
        this.done = !this.done;
    }
}

const shoppingList: ShoppingItem[] = [];
const newItemInput = document.getElementById('new-item') as HTMLInputElement;
const shoppingListElement = document.getElementById('shopping-list') as HTMLUListElement;
const itemsCountElement = document.getElementById('items-count') as HTMLDivElement;
const hideCompletedCheckbox = document.getElementById('hide-completed') as HTMLInputElement;

function renderList(): void {
    shoppingListElement.innerHTML = '';
    let totalCount = 0;
    let markedCount = 0;
    let unmarkedCount = 0;
    const hideCompleted = hideCompletedCheckbox.checked;

    shoppingList.forEach((item, index) => {
        if (!item.deleted) {
            totalCount++;
            if (item.done) {
                markedCount++;
            } else {
                unmarkedCount++;
            }

            if (!hideCompleted || !item.done) {
                const itemElement = document.createElement('li');
                itemElement.className = item.done ? 'shopping-item marked-item' : 'shopping-item';

                const itemText = document.createElement('span');
                itemText.className = 'item-text';
                itemText.textContent = item.description;
                itemElement.appendChild(itemText);

                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete-button';
                deleteButton.textContent = 'X';
                deleteButton.addEventListener('click', (event) => {
                    event.stopPropagation();
                    item.deleted = true;
                    renderList();
                });

                itemElement.addEventListener('click', () => {
                    item.toggleDone();
                    renderList();
                });

                itemElement.appendChild(deleteButton);
                shoppingListElement.appendChild(itemElement);
            }
        }
    });

    itemsCountElement.innerHTML = `
        Total items: ${totalCount} |
        Marked items: ${markedCount} |
        Unmarked items: ${unmarkedCount}
    `;
}

newItemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && newItemInput.value.trim() !== '') {
        const newItem = new ShoppingItem(newItemInput.value.trim());
        shoppingList.push(newItem);
        newItemInput.value = '';
        renderList();
    }
});

hideCompletedCheckbox.addEventListener('change', () => {
    renderList();
});

renderList();
