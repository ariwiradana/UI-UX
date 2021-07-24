$(document).ready(function () {
    AOS.init();
    Story();
    Posts();
});

function GetUserName() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function Story() {
    let url = 'https://source.unsplash.com/random/200x200?person&sig=';
    let data = [
        ['ariwiradana', `${url}`],
        ['juliastuti', `${url}`],
        ['adhiindra', `${url}`],
        ['adityamahendra', `${url}`],
        ['dwikikrisnanda', `${url}`],
        ['sitadewi', `${url}`],
        ['adiwira', `${url}`],
        ['toby_', `${url}`],
        ['donibintang', `${url}`],
        ['bobby_', `${url}`],
        ['madekusuma', `${url}`],
        ['adisuprapta', `${url}`],
        ['andikaputra', `${url}`],
    ];

    $.each(data, function (i, obj) {
        $('.story-content').append(`
            <div class="story-item">
                <div class="story-img">
                    <img class="story" data-src="${obj[1]}${i}" alt="">
                </div>
                <h6 class="story-name">${obj[0].length > 10 ? obj[0].substr(0, 10) + '...' : obj[0]}</h6>
            </div>    
        `);

        $(".story").Lazy({
            effect: 'fadeIn',
            afterLoad: function () {
                $('.story-item').addClass('story-active');
            },

        });
    });
}

function Thousand() {
    let x = Math.floor(100 + Math.random() * 3000);
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function RandomNumber(n) {
    return Math.floor(Math.random() * n)
}

function Posts() {
    let url = 'https://source.unsplash.com/random/sig=';
    let caption = [
        ['its a good day everybody'],
        ['anjay gurinjayy'],
        ['semoga menyenangkan'],
        ['selamat bersemangatt'],
        ['kerenn bangett'],
        ['kamu pasti bisa'],
        ['semangat terus pasti bisa'],
        ['suasana tenang di pagi hari'],
        ['malam kelabu'],
        ['semoga bahagia'],
        ['malam mingguan'],
        ['covid 19 sucks'],
        ['vaksinasi hari ini amann'],
        ['semangat ngabbb']
    ];

    let location = ['Bali', 'Seminyak', 'Kuta', 'Kerobokan', 'Kelungkung', 'Karangasem', 'Bangli']

    let data = [
        ['ariwiradana', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['hekabaruna', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['egaroti', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['gunk_ari', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['yuri', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['adiwira', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['eka', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['ayuwidya', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['yumakusuma', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['ayusintia', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['made', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['gozal', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['baguskrisna', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['madepuja', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['gedewahyu', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['agusjulit', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['mirah', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['dekello', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['arimbawa', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['arinatha', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['dian', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['putubagia', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['satria', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
        ['rio', `${url}`, location[RandomNumber(6)], Thousand(), caption[RandomNumber(13)], RandomNumber(10)],
    ];

    let comment = [
        ['ayudesniari_', 'keren cuyyy'],
        ['aryanovita', 'kle mantap'],
        ['bayuaditya', 'kerenn'],
        ['dedekarmawan', 'mantab ngabb'],
    ];

    $.each(data, function (i, obj) {
        $('.post-container').append(`
            <div class="post-content" data-aos="fade-up">
                <div class="post-header">
                    <div class="post-identity">
                        <div class="img-identity">
                            <img src="${obj[1]}${i}" alt="">
                        </div>
                        <div class="identity-text">
                            <a href="#">
                                <div class="identity-name">${obj[0]}</div>
                            </a>
                            <a href="#">
                                <div class="identity-location">${obj[2]}</div>
                            </a>
                        </div>
                    </div>
                    <i class="post-menu-icon fi-rr-menu-dots"></i>
                </div>
                <div class="post-body">
                    <img class="lazy" data-src="${obj[1]}${i + 5}" alt="">
                </div>
                <div class="post-footer">
                    <div class="post-action">
                        <div class="action-left">
                            <i id="action-love" class="action-icon fi-rr-heart"></i>
                            <i class="action-icon fi-rr-comment"></i>
                            <i class="action-icon fi-rr-paper-plane"></i>
                        </div>
                        <i class="action-icon fi-rr-bookmark"></i>
                    </div>
                    <div class="post-like">${obj[3]} <span>likes</span></div>
                    <div class="identity-name footer-identity-name">${obj[0]} <span class="post-caption">${obj[4]}</span></div>
                    <div class="post-caption text-muted">See all <span class="comment-count">${obj[5] + 1}</span> comments
                    </div>
                    <div class="comment-content">

                    </div>
                </div>
            </div>
        `);

        $(".lazy").Lazy({
            effect: 'fadeIn',
            afterLoad: function () {
                $('.post-content').show();
            },

        });
    });

    $.each(comment, function (i, obj) {
        $('.comment-content').append(`
            <div class="comment">
                <div class="identity-name">${obj[0]} <span class="post-caption">${obj[1]}</span></div>
                <i id="comment-love" class="comment-action-icon fi-rr-heart"></i>
            </div>        
        `);
    });

    $('#action-love, #comment-love').click(function () {
        $(this).toggleClass('action-love-active');
    });
}