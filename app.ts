import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';

@Component({
selector: 'reddit',
template: `
    <form class="ui large form segment">
        <h3 class="ui header">Add a Link</h3>
        <div class="field">
            <label for ="title">Title:</label>
            <input name="title" #newtitle>
        </div>
        <div class="field">
            <label for ="link">Link:</label>
            <input name="link" #newlink>
        </div>
        <button (click)="addArticle(newtitle, newlink)" class="ui positive right floated button">
            Submit link
        </button>
    </form>

    <div class="ui grid posts">
        <reddit-article></reddit-article>
    </div>
`
})
class RedditApp {
    addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
        console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    }
}


@Component({
    selector: 'reddit-article',
    host: {
        class: 'row'
    },
    template: `
        <div class="four wide column center aligned votes" >
            <div class="ui statistic" >
                <div class="value" >
                    2
                </div>
                <div class="label" >Points</div>
            </div>
        </div>
        <div class="twelve wide column" >
            <a class="ui large header" href="#" >Love angular 2</a>
            <ul class="ui big horizontal list voters" >
                <li class="item" >
                    <a href="#">
                        <i class="arrow up icon" ></i>upvote
                    </a>
                </li>
                <li class="item" >
                    <a href>
                        <i class="arrow down icon" ></i>downvote
                    </a>
                </li>
            </ul>
        </div>
    `
})
class ArticleComponent {
}

bootstrap(RedditApp);
bootstrap(ArticleComponent);