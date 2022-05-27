<script >
export default {
    data(){
        return{
            items: [
        {
          title: "Fridge",
          image: "https://casacuesta.com/media/catalog/product/cache/afcac67a0d77755283578b677f040f2b/3/3/3308226-A_1.jpg",
          rating: 4.5
        },
        {
          title: "Computer",
          image: "https://c.s-microsoft.com/en-ca/CMSImages/1920_Panel01_PriorityFeature_AIO.jpg?version=84488a58-c07f-6a34-a2f8-6c51a147d7fb",
          rating: 5
        },
        {
          title: "Washing Machine",
          image: "https://www.lg.com/cac/images/lavadoras-y-secadoras/md06205436/gallery/D-02.jpg",
          rating: 5
        }
      ]
    }
  },
  methods: {
    info(value) {
      console.log(value);
    }
  }
    }

</script>

<template>
    <div>
  <b-carousel-list v-model="test" :data="items" :items-to-show="2">
    <template slot="item" slot-scope="list">
      <div class="card">
        <div class="card-image">
          <figure class="image is-5by4">
            <a @click="info(list.index)">
              <img :src="list.image">
            </a>
          </figure>
          <b-tag type="is-danger" rounded style="position: absolute; top: 0;">
            <b>50% OFF</b>
          </b-tag>
        </div>
        <div class="card-content">
          <div class="content">
            <p class="title is-6">{{ list.title }}</p>
            <p class="subtitle is-7">@Shop_Online_Father</p>
            <div class="field is-grouped">
              <p class="control" v-if="list.rating">
                <b-rate :value="list.rating" show-score disabled/>
              </p>
              <p class="control" style="margin-left: auto">

              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </b-carousel-list>

    </div>
</template>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
</style>