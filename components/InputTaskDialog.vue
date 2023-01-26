<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="open" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">User Profile</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal first name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal middle name"
                                        hint="example of helper text only on focus"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                    <v-text-field label="Legal last name*" hint="example of persistent helper text"
                                        persistent-hint required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Email*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Password*" type="password" required></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*"
                                        required></v-select>
                                </v-col>
                                <v-col cols="12" sm="6">
                                    <v-autocomplete
                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                        label="Interests" multiple></v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closedDialog()">
                            Close
                        </v-btn>
                        <v-btn color="blue darken-1" text @click="closedDialog()">
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
    props: {
        open: {
            type: Boolean,
            default: false
        }
    },
    setup(_, context) {
        const taskTitle = ref("")
        const taskTitleComputed = computed({
            get: () => taskTitle.value,
            set: (value) => (taskTitle.value = value),
        })
        const closedDialog = () => {
            context.emit("close", taskTitleComputed.value);
        }
        return {
            taskTitleComputed,
            closedDialog
        }
    }
})
</script>