<template>
    <div>
        <!-- Header Section Begin -->
        <header class="header-section">
            <div class="container">
                <div class="logo">
                    <a href="./index.html">
                        <img src="/public/CCHUB-LOGO.jpeg" alt="" style="width: 80px; height:50px;">
                    </a>
                </div>
                <div class="nav-menu">
                    <nav class="mainmenu mobile-menu">
                        <ul>
                            <li class="active"><RouterLink to="/HomePage" class="link">Home</RouterLink></li>
                            <li><a href="./about-us.html" class="link">About</a></li>
                            <li><a href="./speaker.html" class="link">Speakers</a>
                                <ul class="dropdown">
                                    <li><a href="#" class="link">Jayden</a></li>
                                    <li><a href="#" class="link">Sara</a></li>
                                    <li><a href="#" class="link">Emma</a></li>
                                    <li><a href="#" class="link">Harriet</a></li>
                                </ul>
                            </li>
                            <li><a href="./schedule.html" class="link">Schedule</a></li>
                            <li><a href="./blog.html" class="link">Blog</a></li>
                            <li><a href="./contact.html" class="link">Contacts</a></li>
                        </ul>
                    </nav>
                    <a href="#" class="primary-btn top-btn link"><i class="fa fa-ticket"></i> Ticket</a>
                </div>
                <div id="mobile-menu-wrap"></div>
            </div>
        </header>
        <!-- Header End -->
    </div>
</template>

<script>
export default {
    name: 'HeaderPage',
}
</script>

<style>
.link{
    text-decoration: none;
}
</style>