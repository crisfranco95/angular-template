
export class NavModel {
    public link: string;
    public name: string;
    public icon: string;

    constructor(Link: string,
        Name: string,
        Icon: string
    ) {
        this.link = Link;
        this.name = Name;
        this.icon = Icon;
    }

    getCustomerTemplate() {
        return [

        ];
    }
}

