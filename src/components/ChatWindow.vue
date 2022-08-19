<template>
  <div class="chat-wrapper" ref="msgBox">
    <div class="mesg" v-for="message in formatedMessage" :key="message.id">
      <h6>{{ message.timestamps }}</h6>
      <h3>{{ message.name }}</h3>
      <h5>{{ message.message }}</h5>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";

export default {
  setup() {
    let messages = ref([]);
    let msgBox = ref(null);
    //
    onUpdated(() => {
      msgBox.value.scrollTop = msgBox.value.scrollHeight;
    });

    let formatedMessage = computed(() => {
      return messages.value.map((x) => {
        let formatTime = formatDistanceToNow(x.timestamps.toDate());
        return { ...x, timestamps: formatTime };
      });
    });

    let getMessages = async () => {
      let datas = onSnapshot(
        query(collection(db, "messages"), orderBy("timestamps")),
        (snaps) => {
          let results = [];
          snaps.forEach((doc) => {
            let document = { ...doc.data(), id: doc.id };

            doc.data().timestamps && results.push(document);
          });
          messages.value = results;
        }
      );
    };
    getMessages();
    return { getMessages, messages, formatedMessage, msgBox };
  },
};
</script>

<style>
.chat-wrapper {
  background: #eee;
  width: 100%;
  padding: 20px;
  height: 400px;
  overflow-y: scroll;
}
.mesg {
  text-align: left;
  margin-bottom: 20px;
}

h3 {
  font-size: 15px;
}
h5 {
  font-weight: normal;
}
</style>
