<template>
    <div style="drop" class="charcard">
        <Card @click="onCardClick">
            <template #content>
                <p class="m-0">
                    <img width="220" height="300" :src="img_url" alt="">
                <div class="labelText">{{ name }}</div>
                </p>
            </template>
        </Card>
    </div>
    <Dialog close-icon="pi pi-times-circle" v-model:visible="visible" dismissable-mask modal :header=name
        :style="{ width: '30rem' }">
        <Fieldset legend="Natural 20s">
            <p class="m-0">
                {{ stats?.nat20s }}
            </p>
        </Fieldset>
        <Fieldset legend="Natural 1s">
            <p class="m-0">
                {{ stats?.nat1s }}
            </p>
        </Fieldset>
        <Fieldset legend="Critical Success (+10)">
            <p class="m-0">
                {{ stats?.crits }}
            </p>
        </Fieldset>
        <Fieldset legend="Critical Failures (-10)">
            <p class="m-0">
                {{ stats?.fumbles }}
            </p>
        </Fieldset>
    </Dialog>

</template>

<script setup lang="ts">

import { ref, computed } from 'vue';

const visible = ref(false);

const onCardClick = () => {
    visible.value = !visible.value;
};

const img_url = computed<string>(() => {
    return `${props.name.toLowerCase()}.webp`;
});

export interface Stats {
    char_name: string,
    nat20s: number,
    nat1s: number,
    crits: number,
    fumbles: number
}

const props = defineProps<{
    name: string
    color: string
    stats_array: Stats[] | null
}>();

const stats = computed<Stats | undefined>(() => {
    return props.stats_array?.find((x) => x.char_name === props.name.toLowerCase());
})

</script>

<style scoped>
.p-card {
    background: transparent;
    box-shadow: none;
}

.labelText {
    position: absolute;
    color: v-bind(color);
    font-size: 32px;
    text-shadow: 1px 1px 0px black;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.charcard {
    will-change: filter;
    transition: filter 300ms;
    transition: transform 300ms;

}

.charcard:hover {
    filter: drop-shadow(0 0 3em v-bind(color));
    transform: scale(1.2);
    cursor: pointer;
}
</style>