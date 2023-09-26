<template>
    <div>
        <!-- Counter Section Begin -->
        <section class="counter-section" style="background: linear-gradient(120deg, #ee8425 0%, #f9488b 100%), linear-gradient(120deg, #ee8425 0%, #f9488b 100%);">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="counter-text">
                            <span>Conference Date</span>
                            <h3>Count Every Second <br />Until the Event</h3>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="cd-timer" id="countdown">
                            <div class="cd-item">
                                <span>40</span>
                                <p>Days</p>
                            </div>
                            <div class="cd-item">
                                <span>18</span>
                                <p>Hours</p>
                            </div>
                            <div class="cd-item">
                                <span>46</span>
                                <p>Minutes</p>
                            </div>
                            <div class="cd-item">
                                <span>32</span>
                                <p>Seconds</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Counter Section End -->
    </div>
</template>

<script>

export default {
    name: 'CounterPage'
}
</script>

<style>

</style>