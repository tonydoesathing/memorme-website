<template>
    <div class="container">
        <client-only placeholder="Loading...">
            <agile :navButtons="false" :autoplay="false">
                <div class="slide" >
                    <h5>Digitize objects and record your stories</h5>
                    <div class="slide-img"></div>
                </div>
                <div class="slide" >
                    <h5>Organize your memories into unique collections</h5>
                    <div class="slide-img"></div>
                </div>
                <div class="slide" >
                    <h5>Take a trip down memory lane</h5>
                    <div class="slide-img"></div>
                </div>
            </agile>
        </client-only>
    </div>
 
</template>

<script>

export default {
  
};
</script>

<style>
  .agile__actions {
  margin-top: 20px;
}
.agile__nav-button {
  background: transparent;
  border: none;
  color: #009fff;
  cursor: pointer;
  font-size: 24px;
  transition-duration: 0.3s;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button, .agile__dot:hover button {
  background-color: #009fff;
}
.slide-img{
    height: 50vh;
    background-image: url("/iphone.png");
  background-size: auto 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
.slide>h5{
    padding-left: 5rem;
    padding-right: 5rem;
}
</style>
