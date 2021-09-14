<template>
  <div class="container padding-top fullheight">
    <div class="row">
      <div class="text-holder">
          <h3>How it works</h3>
      </div>
    </div>
    <client-only placeholder="Loading...">
            <agile :navButtons="false" :autoplay="false">
                <div class="slide" >
                    <h5>Digitize objects and record your stories</h5>
                    <div class="slide-img1"></div>
                </div>
                <div class="slide" >
                    <h5>Organize your memories into unique collections</h5>
                    <div class="slide-img2"></div>
                </div>
                <div class="slide" >
                    <h5>Take a trip down memory lane</h5>
                    <div class="slide-img3"></div>
                </div>
            </agile>
    </client-only>
  </div>
</template>

<style scoped>
    .text-holder{
        padding-left:3rem;
        padding-right: 3rem;
    }
    .text-holder>p{
      text-align: center;
    }
</style>

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
.slide-img1{
    height: 70vh;
    background-image: url("/MemoryRender.png");
  background-size: auto 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
.slide-img2{
    height: 70vh;
    background-image: url("/CollectionsRender.png");
  background-size: auto 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
.slide-img3{
    height: 70vh;
    background-image: url("/TimeLineRender.png");
  background-size: auto 100%;
  background-position: top center;
  background-repeat: no-repeat;
}
.slide>h5{
    padding-left: 5rem;
    padding-right: 5rem;
}
</style>
