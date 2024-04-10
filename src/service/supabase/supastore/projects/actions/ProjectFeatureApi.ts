/**
 * Author : Amit raikwar
 * Last updated : 20 Feb, 2024
 */
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

import {
  ToastAlertData,
  getErrorAlertData,
  getSuccessAlertData,
} from "../../../../../provider";
import { SupabaseProjectsDB } from "../../../supabase_main/Supabase";
import { ProjectFeature } from "../ProjectsCollection";

async function addFeature(
  projectId: string,
  featuresData: ProjectFeature[],
  showAlertHandler: (toastAlertData: ToastAlertData) => void
) {
  try {
    const { data, error } = await SupabaseProjectsDB.upsert([
      {
        features: {
          data: featuresData,
        },
      },
    ])
      .eq("project_id", projectId)
      .single();

    if (error) {
      showAlertHandler(
        getErrorAlertData("Error while adding the project feature")
      );
    } else {
      showAlertHandler(
        getSuccessAlertData("Successfully updated the project feature")
      );
    }
  } catch (error) {
    console.log(error);
  }
}

function removeFeature() {
  // remove feature
}

function updateFeature() {
  // update feature
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Export the feature actions
export { addFeature, removeFeature, updateFeature };

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// End of file
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
